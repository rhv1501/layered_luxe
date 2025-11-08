import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const now = Date.now();
    const baseDir = path.join("/tmp", "layeredluxe-quotes");
    await fs.mkdir(baseDir, { recursive: true });

    let logoPath: string | null = null;
    if (data.logoData) {
      // data.logoData expected to be a data URL like: data:<mime>;base64,AAA
      const match = data.logoData.match(/^data:(.+);base64,(.+)$/);
      if (match) {
        const mime = match[1];
        const b64 = match[2];
        const ext = mime.split("/")[1] || "bin";
        const filename = `logo-${now}.${ext}`;
        const p = path.join(baseDir, filename);
        await fs.writeFile(p, Buffer.from(b64, "base64"));
        logoPath = p;
      }
    }

    const record = {
      receivedAt: new Date().toISOString(),
      data: { ...data, logoPath },
    };

    const outFile = path.join(baseDir, `quote-${now}.json`);
    await fs.writeFile(outFile, JSON.stringify(record, null, 2));

    return NextResponse.json({ ok: true });
  } catch (err) {
    return new NextResponse(String(err), { status: 500 });
  }
}
