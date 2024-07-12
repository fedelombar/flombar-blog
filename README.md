# Blog

Welcome to my blog built with [Next.js](https://nextjs.org/), [Redis](https://redis.io/), and [MDX](https://mdxjs.com/). This project aims to create a scalable and efficient blogging platform with enhanced performance and flexibility.

## Features

- **Next.js**: A powerful React framework for building fast and scalable web applications.
- **Redis**: A high-performance in-memory data store used for caching and optimizing performance.
- **MDX**: A format that lets you seamlessly write JSX in Markdown documents.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or later)
- pnpm (v9 or later)
- Redis

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/fedelombar/flombar-blog.git
   cd your-blog-repo
    ```

2. **Install dependencies:**

   ```bash
   pnpm install
    ```
   
3. **Set up environment variables:**
   Create a **.env.local** file in the root directory and add your environment variables. For example:

   ```bash
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
    ```
   
4. **Start Redis:**
   Ensure Redis is running on your machine. You can use a local installation or a cloud service like Upstash.

### Development

To run the development server, execute the following command:

  ```bash
  pnpm next dev
  ```

Open http://localhost:3000 in your browser to see your blog in action.

### Building for Production

To build the project for production, run:

  ```bash
  pnpm next build
  ```

Then, start the production server:

  ```bash
  pnpm next start
  ```
### Deployment

You can deploy your Next.js application to Vercel, which is the platform created by the makers of Next.js.

  1.  Push your code to GitHub.
  2.  Go to Vercel and import your project.
  3.  Follow the steps to deploy.

## Project Structure

Here's a brief overview of the project's structure:

  ```bash
  /components
  - Reusable UI components
/pages
  - Application pages
/posts
  - MDX blog posts
/public
  - Static assets
/styles
  - Global and component-specific styles
```

## Contributing

If you'd like to contribute to this project, please follow these steps:

  1. Fork the repository.
  2. Create a new branch (git checkout -b feature-branch).
  3. Make your changes.
  4. Commit your changes (git commit -m 'Add some feature').
  5. Push to the branch (git push origin feature-branch).
  6. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Acknowledgments


- **[Next.js](https://nextjs.org/)**
- **[Redis](https://redis.io/)**
- **[MDX](https://mdxjs.com/)**
- **[Vercel](https://vercel.com/)**





   
