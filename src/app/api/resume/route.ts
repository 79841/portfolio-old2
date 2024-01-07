import { siteMetadata } from "@/data";
import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const buffer = await readFile(
    path.join(
      process.cwd(),
      siteMetadata.resumePath,
      siteMetadata.resumeFileName,
    ),
  );
  const formData = new FormData();
  formData.append(
    siteMetadata.resumeFileName,
    new Blob([buffer]),
    siteMetadata.resumeFileName,
  );
  const headers = new Headers();
  headers.append(
    "Content-Disposition",
    `attachment; filename="${encodeURIComponent(siteMetadata.resumeFileName)}"`,
  );
  headers.append("Content-Type", "application/pdf; charset=utf-8");

  return new Response(formData, {
    headers,
  });
}
