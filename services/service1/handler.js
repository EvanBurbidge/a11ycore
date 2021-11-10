import sample from "sample";

export async function main(event, context) {
  return {
    statusCode: 200,
    body: `Hello World! Via ${sample()}.`,
  };
}
