import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./config/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:MqILUHo8c6YX@ep-bitter-hall-a53wj9tu.us-east-2.aws.neon.tech/ai-kids-story-builder?sslmode=require',
  },
  verbose: true,
  strict: true,
})