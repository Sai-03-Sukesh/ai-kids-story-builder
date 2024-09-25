"use client";
import { db } from '@/config/db';
import { StoryData } from '@/config/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import BookCoverPage from '../_components/BookCoverPage';
import StoryPages from '../_components/StoryPages';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

function ViewStory({ params }: any) {
  const [story, setStory] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const bookRef = useRef<any>(null); // Typed as 'any' to avoid TypeScript issues
  const [count, setCount]=useState(0);

  useEffect(() => {
    getStory();
  }, [params.id]);

  const getStory = async () => {
    try {
      const result = await db
        .select()
        .from(StoryData)
        .where(eq(StoryData.storyId, params.id));

      setStory(result[0]);
    } catch (error) {
      console.error('Error fetching story:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <div className='p-10 md:px-20 lg:px-40 flex-col'>
      <h2 className='font-bold text-4xl text-center p-10 bg-primary text-white'>
        {story?.output?.story_title}
      </h2>
      <div className='relative'>
        {story?.output?.chapters?.length > 0 && (
          // @ts-ignore
          <HTMLFlipBook 
            width={500} 
            height={500} 
            showCover={true} 
            className='mt-10'
            useMouseEvents={false}
            ref={bookRef}
          >
            <div>
              <BookCoverPage imageUrl={story?.coverImage} />
            </div>
            {story?.output?.chapters?.map((chapter: any, index: number) => (
              <div key={index} className='bg-white p-10 border'>
                <StoryPages storyChapter={chapter} />
              </div>
            ))}
          </HTMLFlipBook>
        )}
        {/* Left arrow (Previous page) */}
        {count!=0 && <div 
          className='absolute -left-5 top-[250px]' 
          onClick={() => {
            if (bookRef.current) {
              bookRef.current.pageFlip().flipPrev(); // Flip to the previous page
              setCount(count-1)
            }
          }}
        >
          <IoIosArrowDropleftCircle className='text-[40px] text-primary cursor-pointer' />
        </div>}

        {/* Right arrow (Next page) */}
        {count!=(story?.output?.chapters?.length-1)&& <div 
          className='absolute -right-5 top-[250px]' 
          onClick={() => {
            if (bookRef.current) {
              bookRef.current.pageFlip().flipNext(); // Flip to the next page
              setCount(count+1)
            }
          }}
        >
          <IoIosArrowDroprightCircle className='text-[40px] text-primary cursor-pointer' />
        </div>}
      </div>
    </div>
  );
}

export default ViewStory;
