import fs from "fs"
import { join } from "path"
import { default as jsondata } from "./secrets.json"


if (process.env.NODE_ENV) {

    let filePath = join(process.cwd(), ".env")
    if (fs.existsSync(filePath)) {
        fs.rmSync(filePath)
    }
    fs.writeFileSync(filePath, `DATABASE_URL=${jsondata[process.env.NODE_ENV]["DATABASE_URL"]}`)
}

// console.log(join(process.cwd(), ".env"));
