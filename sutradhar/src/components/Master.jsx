import { Box, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { Transfer } from "antd";

const Master = () => {
  const [datas, setData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);
  useEffect(() => {
    getfunc();
  }, []);
  async function getfunc() {
    let api = await fetch("https://jsonplaceholder.typicode.com/users");
    let details = await api.json();
    setData(details);
    console.log("details:", details);

    const targetKeys = [];
    const datas = [];
    for (let i = 0; i < details.length; i++) {
      const data = {
        key: i.toString(),
        id: details[i].id,
        name: details[i].name,
        username: details[i].username,
        email: details[i].email,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chose) {
        targetKeys.push(data.key);
      }
      datas.push(data);
    }
    setData(datas);
    setTargetKeys(targetKeys);
  }

  const handleChange = (targetKeys) => {
    setTargetKeys(targetKeys);
  };
  return (
    <Box 
    // border={"1px solid yellow"}
     marginTop={"1%"}>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        // border={"1px solid yellow"}
      >
        <Typography>Master</Typography>
        <Typography>New Elements</Typography>
      </Box>
      <Transfer
        dataSource={datas}
        listStyle={{
          width: 450,
          height: 300,
        //   border: "1.5px solid green",
        }}
        // operations={["",""]}
        targetKeys={targetKeys}
        onChange={handleChange}
        render={(item) =>
          `${item.id}-${item.name}-${item.username}-${item.email}`
        }
      />
    </Box>
  );
};

export default Master;
