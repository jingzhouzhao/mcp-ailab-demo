import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function createServer(): McpServer {
  const server = new McpServer({
    name: "&#39;ailab-mcp-server&#39;",
    version: "0.1.0",
  });

  server.tool(
    "get_members",
    "获取AI实验室的成员列表",
    {
     
    },
    async ({ }) => {
  
      const members = {
        list: ["胡伟军","王文翔","孙海宁","杨阳","赵荆州"],
      };

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(members, null, 2),
          },
        ],
      };
    },
  );

  server.tool(
    "get_member_phone",
    "获取AI实验室的成员的手机号",
    {
      name: z.string().describe("成员名"),
    },
    async ({ name }) => {
      if (!name) {
        throw new Error("name is required.");
      }
      const map = {
        "胡伟军": "13999999999",
        "王文翔": "13888888888",
        "孙海宁": "13777777777",
        "杨阳": "13666666666",
        "赵荆州": "13333333333",
      };
      const phoneNumber = map[name];

      const phone = {
        phone: phoneNumber,
      };

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(phone, null, 2),
          },
        ],
      };
    },
  );

  return server;
}
