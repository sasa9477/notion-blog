import { APIResponseError, Client, isFullPageOrDatabase } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

const notionClient = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notionClient });
const databaseId = process.env.NOTION_DATABASE_ID ?? "";

export async function getPageProperties() {
  try {
    const data = await notionClient.databases.query({
      database_id: databaseId,
      sorts: [{ timestamp: "created_time", direction: "descending" }],
    });
    return data.results.filter(isFullPageOrDatabase);
  } catch (e) {
    if (e instanceof APIResponseError) {
      console.log(e);
    }
    return [] as PageObjectResponse[];
  }
}

export async function getPageContent(pageId: string) {
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString.parent;
}
