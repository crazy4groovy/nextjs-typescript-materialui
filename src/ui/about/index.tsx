import Router from "next/router";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";
import Link from "../components/Link";
import Alert from "../components/Alert";
import ProTip from "../components/ProTip";
import Copyright from "../components/Copyright";
import type { Props } from "./types";

export default function About(props: Props) {
  const { counter } = props;
  const { name, age } = props;
  const { data: item, error: itemError, update } = props.swrItem;
  const { data: items, error: itemsError } = props.swrItems;

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="/">Go to the main page via Link</Link>
        <br />
        <span style={{ cursor: "pointer" }} onClick={() => Router.push("/")}>
          Go to the main page via router push
        </span>
        <br />
        <span
          style={{ cursor: "pointer" }}
          onClick={() =>
            Router.push("?counter=1", undefined, { shallow: true })
          }
        >
          Reload page via router push
        </span>
        <hr />
        <Box>Counter: {counter}</Box>
        <Box>
          User properties:
          <br />
          <pre>{JSON.stringify({ name, age }, null, 2)}</pre>
        </Box>
        <Box>
          API Item:
          <br />
          {itemError && <Alert severity="error">{itemError.message}</Alert>}
          <pre>{item && JSON.stringify({ item }, null, 2)}</pre>
          {!itemError && !item && <CircularProgress />}
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={async () => {
            const name = String(Math.random() * 1000);
            const newItem = { ...item, name };
            update(newItem.id, newItem);
          }}
        >
          Mutate
        </Button>
        <Box>
          API Items:
          <br />
          {itemsError && <Alert severity="error">{itemsError.message}</Alert>}
          <pre>{items && JSON.stringify({ items }, null, 2)}</pre>
          {!items && <CircularProgress />}
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
