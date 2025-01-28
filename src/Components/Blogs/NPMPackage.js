import {
  Box,
  Button,
  Code,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Code as CodeIcon, FolderOpen } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    backgroundColor: "#f5f5f5",
    borderRadius: theme.shape.borderRadius,
  },
  header: {
    marginBottom: theme.spacing(4),
  },
  stepTitle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  codeBlock: {
    backgroundColor: "#272c34",
    color: "#ffffff",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    overflowX: "auto",
  },
  listItem: {
    display: "flex",
    alignItems: "flex-start",
  },
  listItemIcon: {
    minWidth: theme.spacing(4),
  },
}));

const NpmPackage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h3" component="h1" className={classes.header}>
        How to Create an npm Package for a React Component
      </Typography>
      <Typography variant="body1" gutterBottom>
        Creating and publishing your own npm package for a React component can
        be a rewarding experience. This guide will walk you through the process
        step-by-step.
      </Typography>

      <Typography variant="h4" component="h2" className={classes.stepTitle}>
        Step 1: Set Up Your Development Environment
      </Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <FolderOpen />
          </ListItemIcon>
          <ListItemText
            primary="Create a New Directory:"
            secondary={
              <Box component="pre" className={classes.codeBlock}>
                <Code>
                  mkdir my-react-component
                  <br />
                  cd my-react-component
                </Code>
              </Box>
            }
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Initialize a New npm Package:"
            secondary={
              <Box component="pre" className={classes.codeBlock}>
                <Code>npm init</Code>
              </Box>
            }
          />
        </ListItem>
      </List>

      <Typography variant="h4" component="h2" className={classes.stepTitle}>
        Step 2: Create Your React Component
      </Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Install React and Babel:"
            secondary={
              <Box component="pre" className={classes.codeBlock}>
                <Code>
                  npm install react react-dom prop-types
                  <br />
                  npm install --save-dev @babel/core @babel/preset-env
                  @babel/preset-react babel-loader
                </Code>
              </Box>
            }
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Set Up Babel:"
            secondary={
              <Box component="pre" className={classes.codeBlock}>
                <Code>
                  {`{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}`}
                </Code>
              </Box>
            }
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Create Your React Component:"
            secondary={
              <Box component="pre" className={classes.codeBlock}>
                <Code>
                  {`// src/index.js
import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ message }) => {
  return <div>{message}</div>;
};

MyComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MyComponent;`}
                </Code>
              </Box>
            }
          />
        </ListItem>
      </List>

      <Typography variant="h4" component="h2" className={classes.stepTitle}>
        Step 3: Set Up Webpack
      </Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Install Webpack:"
            secondary={
              <Box component="pre" className={classes.codeBlock}>
                <Code>npm install --save-dev webpack webpack-cli</Code>
              </Box>
            }
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Create a Webpack Configuration File:"
            secondary={
              <Box component="pre" className={classes.codeBlock}>
                <Code>
                  {`const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};`}
                </Code>
              </Box>
            }
          />
        </ListItem>
      </List>

      <Typography variant="h4" component="h2" className={classes.stepTitle}>
        Step 4: Build Your Package
      </Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Add Build Script:"
            secondary={
              <Box component="pre" className={classes.codeBlock}>
                <Code>
                  {`"scripts": {
  "build": "webpack"
}`}
                </Code>
              </Box>
            }
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Run the Build:"
            secondary={
              <Box component="pre" className={classes.codeBlock}>
                <Code>npm run build</Code>
              </Box>
            }
          />
        </ListItem>
      </List>

      <Typography variant="h4" component="h2" className={classes.stepTitle}>
        Step 5: Prepare for Publishing
      </Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <>
                Update <code>package.json</code>:
              </>
            }
            secondary={
              <Box component="pre" className={classes.codeBlock}>
                <Code>
                  {`{
  "name": "my-react-component",
  "version": "1.0.0",
  "description": "A simple React component",
  "main": "dist/index.js",
  "scripts": {
    "build": "webpack"
  },
  "author": "Your Name",
  "license": "ISC",
  "peerDependencies": {
    "react": "^17.0.0",
    "react-dom": "^17.0.0"
  },
  "devDependencies": {
    "@babel/core": "^7.14.6",
    "@babel/preset-env": "^7.14.5",
    "@babel/preset-react": "^7.14.5",
    "babel-loader": "^8.2.2",
    "webpack": "^5.38.1",
    "webpack-cli": "^4.7.2"
  }
}`}
                </Code>
              </Box>
            }
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <>
                Create a <code>.npmignore</code> File:
              </>
            }
            secondary={
              <Box component="pre" className={classes.codeBlock}>
                <Code>
                  {`node_modules
src
webpack.config.js
.babelrc`}
                </Code>
              </Box>
            }
          />
        </ListItem>
      </List>

      <Typography variant="h4" component="h2" className={classes.stepTitle}>
        Step 6: Publish Your Package
      </Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Log In to npm:"
            secondary={
              <Box component="pre" className={classes.codeBlock}>
                <Code>npm login</Code>
              </Box>
            }
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Publish Your Package:"
            secondary={
              <Box component="pre" className={classes.codeBlock}>
                <Code>npm publish</Code>
              </Box>
            }
          />
        </ListItem>
      </List>

      <Typography variant="h4" component="h2" className={classes.stepTitle}>
        Conclusion
      </Typography>
      <Typography variant="body1" gutterBottom>
        Congratulations! You've successfully created and published an npm
        package for your React component. You can now share your component with
        the world and use it in your projects by installing it via npm.
      </Typography>

      <Typography variant="h4" component="h2" className={classes.stepTitle}>
        Example Usage
      </Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Install Your Component:"
            secondary={
              <Box component="pre" className={classes.codeBlock}>
                <Code>npm install my-react-component</Code>
              </Box>
            }
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Use It in Your Project:"
            secondary={
              <Box component="pre" className={classes.codeBlock}>
                <Code>
                  {`import React from 'react';
import MyComponent from 'my-react-component';

const App = () => {
  return <MyComponent message="Hello, world!" />;
};

export default App;`}
                </Code>
              </Box>
            }
          />
        </ListItem>
      </List>

      <Box textAlign="center" marginTop={4}>
        <Button
          variant="contained"
          color="primary"
          href="https://www.npmjs.com/"
          target="_blank"
        >
          Learn More on npm
        </Button>
      </Box>
    </Container>
  );
};

export default NpmPackage;
