"use strict";

module.exports.soma = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        // message: "Go Serverless v1.0! Your function executed successfully!",
        soma:
          parseInt(event["queryStringParameters"]["a"]) +
          parseInt(event["queryStringParameters"]["b"]),
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
