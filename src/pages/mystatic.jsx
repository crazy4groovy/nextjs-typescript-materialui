const Component = (props) => {
  return <h1>STATIC {props.myvar}</h1>;
};
export default Component;

export async function getStaticProps(context) {
  // Normally you'd do something here with context and/or fetch, eg:
  // const myvar = await fetch('http://myapi.com/...').then(r => r.json()).then(r => r.myvar)
  const myvar = "!!";

  return {
    props: { myvar }, // will be passed to the page component as props
  };
}
