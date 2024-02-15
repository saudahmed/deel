import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { grey, blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: grey[500],
    },
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
