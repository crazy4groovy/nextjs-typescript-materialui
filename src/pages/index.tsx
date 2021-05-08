import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import ProTip from "../components/molecules/ProTip";
import Link from "../components/atoms/Link";
import Copyright from "../components/molecules/Copyright";
import { CounterContext, UserContext } from "../context";

export default function Component() {
  const { addOne } = useContext(CounterContext);
  const userStore = useContext(UserContext);

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <hr />
        <Box>
          Add one to counter:{" "}
          <Button variant="contained" color="secondary" onClick={addOne}>
            + 1
          </Button>
        </Box>
        <Box>
          <h1>User:</h1>
          Name: {userStore.name}
          <br />
          <input
            value={userStore.name}
            onChange={(e) => {
              const { value } = e.target;
              userStore._dispatch({ type: "name", payload: value });
            }}
          />
          <br />
          Age: {userStore.age}
          <br />
          <input
            type="number"
            value={userStore.age}
            onChange={(e) => {
              const { value } = e.target;
              userStore._dispatch({ type: "age", payload: Number(value) || 0 });
            }}
          />
          <br />
          <br />
          <Link href="/mystatic" color="secondary">
            Go to a static page
          </Link>
          <br />
          <Link href="/myposts/1" color="secondary">
            Go to the first (static) post page
          </Link>
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
