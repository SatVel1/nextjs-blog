// API routes create API endpoint inside a Next.js app. This can be
// done by creating a function inside the pages/api directory. They can
// can be deployed as Serverless Functions (also known as lambdas).

// Good use case for API Routes, is handling form input. Saving incoming data
// to the database. Securely communicating with third-party API. Previewing
// draft content from your CMS.

// req is an instance of http.IncomingMessage, plus some pre-built
// middlewares.
// res is an instance of http.ServerResponse, plus some helper functions.
export default function handler(req, res) {
	res.status(200).json({ text: 'Hello' });
}
