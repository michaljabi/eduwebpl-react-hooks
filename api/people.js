import { nanoid } from "nanoid"
import fs from "node:fs/promises"
import path from "node:path"
import process from "node:process"

const jsonString = await fs.readFile(
  path.join(process.cwd(), "backend-mock", "db.json"),
  "utf8",
)
const people = JSON.parse(jsonString).people

export function GET() {
  return new Response(JSON.stringify(people))
}

export async function POST(request) {
  const body = await request.json()
  people.push({ id: nanoid(), bio: "", ...body })
  return new Response(JSON.stringify(body))
}
