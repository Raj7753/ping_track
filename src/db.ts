import { neonConfig, Pool } from "@neondatabase/serverless"
import { PrismaNeon } from "@prisma/adapter-neon"
import { PrismaClient } from "@prisma/client"

if (process.env.NODE_ENV === "production" && typeof WebSocket === "undefined") {
  neonConfig.webSocketConstructor = require("ws")
}

declare global {
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const adapter = new PrismaNeon(pool)
  prisma = new PrismaClient({ adapter })
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma