import { db } from "./src/db"

async function main() {
  try {
    const user = await db.user.findFirst()
    console.log("SUCCESS:", user)
  } catch (error) {
    console.error("ERROR:", error)
  }
}
main()
