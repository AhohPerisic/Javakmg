async function getName() {
    // return Promise.resolve("Tom");
    throw new Error("err..");
}

getName().then((err) => {
    console.log(err);
});