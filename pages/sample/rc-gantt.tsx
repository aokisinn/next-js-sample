import type { NextPage } from "next";
import { Box, GridItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import RcGantt, { GanttProps } from "rc-gantt";

const data = [
  {
    name: "タスク1",
    startDate: "2022-10-10",
    endDate: "2022-10-15",
    collapsed: false,
    children: [
      {
        startDate: "2022-10-10",
        endDate: "2022-10-13",
        name: "タスク 子1",
        collapsed: false,
        content: "123123123",
      },
    ],
  },
  {
    name: "タスク2",
    startDate: "2022-10-10",
    endDate: "2022-10-15",
    collapsed: false,
    children: [
      {
        startDate: "2022-10-10",
        endDate: "2022-10-12",
        name: "タスク 子1",
        collapsed: false,
        content: "123123123",
      },
      {
        startDate: "2022-10-12",
        endDate: "2022-10-15",
        name: "タスク 子2",
        collapsed: false,
        content: "123123123",
      },
    ],
  },
];

const Sample: NextPage = () => {
  return (
    <Box w="100%" h="1280px" bg="gray">
      {/* Grid */}
      <Link href="/">戻る</Link>
      <Text fontSize="xl" color="white">
        ガントチャート(rc-gantt)
      </Text>
      <div>
        <div style={{ height: 500 }}>
          {/* TODO 日本化にできるか調べる */}
          <RcGantt
            data={data}
            columns={[
              {
                name: "name",
                label: "名称",
                width: 200,
                maxWidth: 200,
                minWidth: 200,
              },
            ]}
            onUpdate={async () => {
              return true;
            }}
          />
        </div>
      </div>
    </Box>
  );
};

export default Sample;
