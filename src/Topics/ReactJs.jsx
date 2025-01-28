import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const topics = [
  {
    title: "Component Lifecycle Methods and Hooks",
    content:
      "Understanding class components lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount). Using React hooks like useState, useEffect, useContext, useReducer.",
  },
  {
    title: "State Management",
    content:
      "Using React's built-in state and context API. Understanding external state management libraries like Redux, MobX, or Zustand.",
  },
  {
    title: "React Router",
    content:
      "Implementing client-side routing with React Router. Understanding nested routes, route parameters, and redirections.",
  },
  {
    title: "Performance Optimization",
    content:
      "Techniques for optimizing React performance (memoization, useMemo, useCallback, React.memo, lazy loading, Suspense). Understanding React's reconciliation process and virtual DOM.",
  },
  {
    title: "Forms and Form Handling",
    content:
      "Managing form state and validation. Using libraries like Formik or React Hook Form.",
  },
  {
    title: "Styling in React",
    content:
      "Various styling approaches: CSS Modules, Styled Components, Emotion, inline styles. Using Material-UI (MUI) or other component libraries.",
  },
  {
    title: "Testing in React",
    content:
      "Writing unit tests using Jest and React Testing Library. Understanding the basics of end-to-end testing with tools like Cypress or Selenium.",
  },
  {
    title: "Context API",
    content:
      "Using Context API for prop drilling issues. Creating and consuming context in functional components.",
  },
  {
    title: "Advanced Patterns",
    content: "Higher-Order Components (HOCs). Render Props. Custom Hooks.",
  },
  {
    title: "Handling Side Effects",
    content:
      "Using useEffect for side effects. Handling asynchronous operations with async/await and Promises.",
  },
  {
    title: "TypeScript with React",
    content:
      "Integrating TypeScript with React for type safety. Understanding common TypeScript types and interfaces in React components.",
  },
  {
    title: "API Integration",
    content:
      "Fetching data using Axios or Fetch API. Handling loading states, error states, and data fetching patterns (e.g., SWR, React Query).",
  },
  {
    title: "Code Splitting and Lazy Loading",
    content:
      "Implementing code splitting with React.lazy and Suspense. Understanding the benefits of code splitting for performance.",
  },
  {
    title: "Error Handling",
    content:
      "Using Error Boundaries. Gracefully handling errors in UI components.",
  },
  {
    title: "Accessibility in React",
    content:
      "Ensuring web accessibility (ARIA attributes, keyboard navigation). Tools and practices for building accessible React applications.",
  },
  {
    title: "Server-Side Rendering (SSR) and Static Site Generation (SSG)",
    content:
      "Understanding the differences between SSR and SSG. Using frameworks like Next.js for SSR and SSG.",
  },
];

const Preparation = () => {
  return (
    <div className="preparation-container">
      {topics.map((topic, index) => (
        <Card key={index} className="topic-card">
          <CardContent>
            <Typography variant="h5" component="div">
              {topic.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {topic.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Preparation;
