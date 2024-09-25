/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro-exp-0827",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "create kids story on description for 5-8 Years kids, Educational story, and all images in Paper cut style: story of boy and Magic school, give me 5 chapter, With detailed image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON format\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"story_title\": \"Leo and the Magical Paper Academy\",\n  \"cover_image_prompt\": {\n    \"style\": \"Paper cut style illustration\",\n    \"description\": \"A young boy with wide eyes and a backpack stands before a whimsical school building made of colorful layered paper. The school has swirling towers, crescent moon windows, and stars hanging from the roof. The boy holds a glowing paper scroll in his hand, looking both excited and nervous. The title 'Leo and the Magical Paper Academy' is written in playful, cut-out letters above the scene.\"\n  },\n  \"chapters\": [\n    {\n      \"chapter_number\": 1,\n      \"chapter_title\": \"The Mysterious Invitation\",\n      \"text\": \"Leo was a curious boy who loved to fold paper airplanes and create origami animals. One breezy afternoon, a vibrant red paper bird flew through his open window. Attached to its leg was a tiny scroll tied with a shimmering silver thread. The scroll invited Leo to the Magical Paper Academy, a hidden school where students learned to create magic with paper!\",\n      \"image_prompt\": {\n        \"style\": \"Paper cut style illustration\",\n        \"description\": \"A red paper bird with layered wings flies through a window, carrying a small scroll tied with silver thread. Leo, a boy with short brown hair and curious eyes, reaches out towards the bird with a look of surprise and wonder. The window frame and curtains are also depicted in paper cut style, with soft edges and depth created through layering.\"\n      }\n    },\n    {\n      \"chapter_number\": 2,\n      \"chapter_title\": \"The Paper Forest\",\n      \"text\": \"Following the paper bird, Leo found himself standing before a grand gate made of intricately folded paper flowers. Stepping through, he entered a magical forest. Trees were made of green tissue paper, their leaves rustling in the wind. Colorful paper butterflies fluttered around, and fluffy cotton-ball clouds floated in a sky made of light blue construction paper.\",\n      \"image_prompt\": {\n        \"style\": \"Paper cut style illustration\",\n        \"description\": \"Leo stands before a gate made of colorful paper flowers, with layered petals and leaves. The gate opens into a magical forest with trees made of green tissue paper, layered to create depth. Paper butterflies in various shapes and colors fly around, and fluffy cotton ball clouds float in a light blue construction paper sky.\"\n      }\n    },\n    {\n      \"chapter_number\": 3,\n      \"chapter_title\": \"The First Lesson: Paper Animals\",\n      \"text\": \"Inside the Academy, Leo met his teacher, Ms. Ori, a wise owl made entirely of folded brown paper. She taught him how to imbue paper animals with life. Leo carefully folded a paper crane, and with a sprinkle of magic dust, it flapped its wings and flew around the classroom! He learned that different colors and shapes held different magical properties.\",\n      \"image_prompt\": {\n        \"style\": \"Paper cut style illustration\",\n        \"description\": \"Ms. Ori, a wise owl made of layered brown paper, stands on a perch in a classroom filled with paper crafts. Leo, sitting at a desk, folds a paper crane. Sparkling magic dust floats around the crane, which is shown flapping its wings and coming to life. The classroom walls are decorated with colorful paper shapes and cutouts.\"\n      }\n    },\n    {\n      \"chapter_number\": 4,\n      \"chapter_title\": \"The Paper Dragon Challenge\",\n      \"text\": \"To graduate, Leo had to pass a final challenge: create a paper dragon that could fly and breathe confetti. He worked hard, carefully choosing red and gold paper, layering scales, and adding fierce eyes. With a deep breath, he blew magic dust onto his creation. The dragon roared to life, its wings flapping as it soared through the air, showering the room with colorful confetti!\",\n      \"image_prompt\": {\n        \"style\": \"Paper cut style illustration\",\n        \"description\": \"Leo stands proudly beside a large, intricate paper dragon made of red and gold layered paper. The dragon has fierce eyes and detailed scales, and it is shown flapping its wings and breathing out colorful confetti. The background shows the excited faces of other paper animals and students, all in paper cut style.\" \n      }\n    },\n    {\n      \"chapter_number\": 5,\n      \"chapter_title\": \"The Magical Journey Continues\",\n      \"text\": \"Leo graduated from the Magical Paper Academy with a heart full of joy and a head full of paper magic. He returned home, ready to use his new skills to make the world a more colorful and imaginative place. He knew that with a little bit of creativity and a lot of paper, any dream could take flight.\",\n      \"image_prompt\": {\n        \"style\": \"Paper cut style illustration\",\n        \"description\": \"Leo, wearing a graduation cap made of paper, flies on the back of his paper dragon over his hometown. The town is depicted in a whimsical paper cut style, with colorful houses, trees, and clouds. Leo waves down at people below, who look up in awe and wonder. The scene is filled with a sense of joy and possibility.\"\n      }\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });
  
    
  