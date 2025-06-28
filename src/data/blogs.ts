// src/data/blogs.ts

export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  coverImage: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Mastering Flutter State Management",
    slug: "flutter-state-management",
    excerpt:
      "Explore how to efficiently manage state in Flutter apps using popular approaches like GetX, Provider, and Riverpod, ensuring scalable and maintainable codebases.",
    content: `Flutter offers several powerful options for managing state, which is crucial for building reactive and robust applications. In this article, we'll deep dive into GetX, Provider, and Riverpod, comparing their use cases, performance, and best practices...`,
    publishedAt: "2025-06-20",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXxGxqDn2bVWeFQNz5Pus1jLOL7TIuSevcbw&s",
  },
  {
    id: 2,
    title: "Building Responsive UI in React",
    slug: "building-responsive-ui-react",
    excerpt:
      "Learn how to create adaptive user interfaces in React applications leveraging Tailwind CSS and CSS Grid for mobile-first design.",
    content: `Responsive design is essential in modern web development to provide great experiences across devices. This tutorial explains how to build responsive layouts in React using Tailwind CSS's utility classes and CSS Grid to build flexible UIs...`,
    publishedAt: "2025-06-15",
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "An Introduction to TypeScript for JavaScript Developers",
    slug: "introduction-to-typescript",
    excerpt:
      "Discover the benefits of TypeScript and how it can help you catch errors early and write more maintainable JavaScript code.",
    content: `TypeScript extends JavaScript by adding static types, which help prevent many common bugs during development. This guide covers TypeScript basics, how to integrate it into your projects, and practical tips for migration...`,
    publishedAt: "2025-06-10",
    coverImage:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Getting Started with Next.js 14",
    slug: "getting-started-nextjs-14",
    excerpt:
      "A beginner-friendly guide to Next.js 14, focusing on new features like app directory and server components.",
    content: `Next.js 14 introduces exciting features that make React development more powerful and scalable. This article walks you through setting up a Next.js 14 project and how to leverage server components and the app directory for optimized apps...`,
    publishedAt: "2025-06-08",
    coverImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Understanding REST APIs: A Comprehensive Guide",
    slug: "understanding-rest-apis",
    excerpt:
      "This guide explains the principles of RESTful APIs, best practices, and how to design scalable APIs for modern applications.",
    content: `REST APIs are the backbone of web services. In this article, we'll discuss REST principles, resource modeling, HTTP methods, and best practices to build APIs that are easy to use and maintain...`,
    publishedAt: "2025-06-05",
    coverImage:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "How to Build a Chat Application with WebSocket",
    slug: "build-chat-app-websocket",
    excerpt:
      "Learn to create real-time chat applications using WebSocket protocol with examples in Node.js and Flutter.",
    content: `Real-time communication is essential for modern apps. WebSocket provides a full-duplex communication channel over a single TCP connection. We'll build a simple chat app using WebSocket on the backend and Flutter for the frontend...`,
    publishedAt: "2025-06-01",
    coverImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Exploring Firebase for Mobile App Development",
    slug: "exploring-firebase-mobile-app-development",
    excerpt:
      "An overview of Firebase services and how they speed up mobile app development with realtime database, authentication, and cloud functions.",
    content: `Firebase is a comprehensive platform for mobile developers that provides backend services like database, authentication, and cloud functions. This article covers how to integrate Firebase into your Flutter or React Native app...`,
    publishedAt: "2025-05-28",
    coverImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Performance Optimization Techniques in React",
    slug: "performance-optimization-react",
    excerpt:
      "Boost your React app performance by learning techniques like memoization, lazy loading, and avoiding unnecessary re-renders.",
    content: `React apps can suffer performance issues if not optimized. This article details practical methods such as React.memo, useMemo, useCallback, code splitting, and lazy loading components to improve speed and responsiveness...`,
    publishedAt: "2025-05-25",
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "A Deep Dive into CSS Flexbox",
    slug: "deep-dive-css-flexbox",
    excerpt:
      "Master CSS Flexbox layout module with examples and tips to build responsive and flexible web layouts.",
    content: `CSS Flexbox is a layout model that allows responsive alignment and distribution of space among items in a container. This deep dive explains properties like justify-content, align-items, flex-grow, and flex-shrink with practical examples...`,
    publishedAt: "2025-05-22",
    coverImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "Getting Started with GraphQL",
    slug: "getting-started-graphql",
    excerpt:
      "An introduction to GraphQL and how it differs from REST APIs with a tutorial to build your first GraphQL server.",
    content: `GraphQL offers flexible and efficient data fetching compared to traditional REST APIs. This article introduces GraphQL basics, schema design, queries, mutations, and setting up a simple server using Apollo...`,
    publishedAt: "2025-05-18",
    coverImage:
      "https://kinsta.com/wp-content/uploads/2022/09/graphql.png",
  },
  {
    id: 11,
    title: "Introduction to Docker for Developers",
    slug: "introduction-docker-developers",
    excerpt:
      "Learn Docker fundamentals and how containerization can improve your development workflow.",
    content: `Docker is a popular containerization platform that allows developers to package applications and dependencies in isolated containers. This guide covers installation, images, containers, Dockerfile, and docker-compose basics...`,
    publishedAt: "2025-05-15",
    coverImage:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    title: "Building Scalable Backend APIs with Node.js",
    slug: "scalable-backend-apis-nodejs",
    excerpt:
      "Tips and best practices to design and implement scalable RESTful APIs using Node.js and Express framework.",
    content: `Node.js is widely used for backend development due to its non-blocking I/O and event-driven model. This article discusses how to build scalable APIs, including routing, middleware, error handling, and database integration...`,
    publishedAt: "2025-05-12",
    coverImage:
      "https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/10227551/og_image/optimized/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png",
  },
  {
    id: 13,
    title: "Introduction to Kubernetes: Container Orchestration",
    slug: "introduction-kubernetes",
    excerpt:
      "Learn how Kubernetes automates deployment, scaling, and management of containerized applications.",
    content: `Kubernetes is an open-source system for automating deployment and scaling of containerized apps. This article explains its architecture, key concepts like pods, services, and deployments, and a beginner-friendly setup...`,
    publishedAt: "2025-05-10",
    coverImage:
      "https://www.cncf.io/wp-content/uploads/2020/09/Kubernetes-architecture-diagram-1-1-1024x698.png",
  },
  {
    id: 14,
    title: "Writing Clean Code: Best Practices",
    slug: "writing-clean-code",
    excerpt:
      "Tips and principles to write clean, readable, and maintainable code in any programming language.",
    content: `Clean code is essential for maintainability and collaboration. Learn about meaningful naming, small functions, avoiding duplication, proper error handling, and writing tests to keep your codebase healthy...`,
    publishedAt: "2025-05-08",
    coverImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    title: "Mobile App Testing Strategies",
    slug: "mobile-app-testing-strategies",
    excerpt:
      "Explore various testing strategies including unit, integration, UI, and automated testing for mobile apps.",
    content: `Testing is critical to deliver quality mobile apps. This article covers different testing types, popular frameworks, continuous integration, and tips to build reliable tests for Flutter and React Native apps...`,
    publishedAt: "2025-05-05",
    coverImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    title: "Deploying Applications with CI/CD Pipelines",
    slug: "deploying-applications-ci-cd",
    excerpt:
      "Understand continuous integration and continuous deployment pipelines to automate software delivery.",
    content: `CI/CD pipelines improve development velocity by automating build, test, and deployment processes. Learn how to configure pipelines using popular tools like GitHub Actions, Jenkins, and GitLab CI...`,
    publishedAt: "2025-05-02",
    coverImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    title: "Accessibility in Web Development",
    slug: "accessibility-web-development",
    excerpt:
      "Learn how to make your web applications accessible to all users, including those with disabilities.",
    content: `Accessibility ensures everyone can use your website. This article covers ARIA roles, semantic HTML, keyboard navigation, and testing tools to create inclusive web experiences...`,
    publishedAt: "2025-04-30",
    coverImage:
      "https://blog.zegocloud.com/wp-content/uploads/2024/03/types-of-web-development-services.jpg",
  },
  {
    id: 18,
    title: "Introduction to Machine Learning",
    slug: "introduction-machine-learning",
    excerpt:
      "A beginner’s guide to concepts, algorithms, and applications of machine learning.",
    content: `Machine learning enables computers to learn from data without explicit programming. This guide introduces supervised, unsupervised learning, popular algorithms, and real-world use cases...`,
    publishedAt: "2025-04-28",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 19,
    title: "Getting Started with Cloud Computing",
    slug: "getting-started-cloud-computing",
    excerpt:
      "Understand cloud computing basics and how to leverage cloud providers like AWS, Azure, and Google Cloud.",
    content: `Cloud computing provides scalable and flexible resources. Learn about IaaS, PaaS, SaaS models, and how to start deploying applications on popular cloud platforms...`,
    publishedAt: "2025-04-25",
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 20,
    title: "DevOps Best Practices for Developers",
    slug: "devops-best-practices",
    excerpt:
      "Explore DevOps culture and best practices to improve collaboration and accelerate software delivery.",
    content: `DevOps bridges development and operations for faster releases. This article covers continuous integration, infrastructure as code, monitoring, and feedback loops to improve your workflows...`,
    publishedAt: "2025-04-20",
    coverImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];
