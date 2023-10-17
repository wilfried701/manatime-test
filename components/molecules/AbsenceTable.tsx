import { Box } from "@chakra-ui/react";
import AbsenceTableheader from "../atoms/AbsenceTable/AbsenceTableheader";
import AbsenceTableLine from "../atoms/AbsenceTable/AbsenceTableLine";
import { table } from "@/utils/fakeDatas";

const AbsenceTable = () => {
  return (
    <Box>
      <AbsenceTableheader />
      {table?.map((item, index) => (
        <AbsenceTableLine
          key={index}
          item={item}
          number={index}
          length={table.length}
        />
      ))}
    </Box>
  );
};

export default AbsenceTable;
