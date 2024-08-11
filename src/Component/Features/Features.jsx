import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./Features.css";
import { categoryData } from "../../Data/data";

function Features() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="Categories">
      <div>
        <h2 className="container1">
          Reimagining Your <span> Business Management </span> with{" "}
          <span> Comprehensive </span> Templates
        </h2>
        <p style={{ textAlign: "center" }}>
          5,000+ Templates | 10+ Business Departments
        </p>
      </div>

      <div className="features-container-2">
        {categoryData.map((item, index) => (
          <Card key={index} className="feature-card-style">
            <CardContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardMedia className="img-size-1">
                  <img src={item.img} style={{ width: "80px" }} />
                </CardMedia>

                <div className="feature-card-style-1">
                  <Typography
                    variant="h6"
                    component="h2"
                    className="feature-card-style-2"
                    style={{ textAlign: "center" }}
                  >
                    {item.description}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Features;
