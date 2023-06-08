import("single-spa").then(({ registerApplication, start }) => {
  import("@courtyen/ui").then(({ courtyenUI }) => {
    console.log(courtyenUI);

    registerApplication({
      name: "courtyen-ui",
      app: courtyenUI,
      activeWhen: ["/"],
    });

    start();
  });
});