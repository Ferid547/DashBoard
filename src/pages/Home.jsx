import Navbar from "../components/NavBar";
import Sidenav from "../components/SideNav";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Əsas səhifə</h1>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              "& > :not(style)": {
                flex: { xs: "auto", md: "1 1 calc(50% - 4px)" },
                minWidth: 0,
                height: 120,
                borderRadius: 5,
                padding: 1,
                color: "white",
                backgroundColor: "#414141",
                marginBottom: { xs: 2, md: 0 },
                marginRight: { xs: 0, md: 2 },
                "& h3": {
                  margin: 1,
                  fontSize: 18,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  "& span": {
                    fontSize: 14,
                    marginLeft: 2,
                  },
                },
                "& p": {
                  marginLeft: 2,
                },
              },
            }}
          >
            <Paper elevation={5}>
              <h3>
                Mənfəət
              </h3>
              <div>
                <p>Total: <span>$ 240k</span></p>
              </div>
            </Paper>
            <Paper elevation={5}>
              <h3>
                Borc
              </h3>
              <div>
                <p>Total: <span>$ 20k</span></p>
              </div>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
