import { Provider } from "react-redux";
import Browse from "./components/Browse";
import Body from "./components/Body";
import { store } from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Body/> },
    {
      path: "/browse",
      element: <Browse/>,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
