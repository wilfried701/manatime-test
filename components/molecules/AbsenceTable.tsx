import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import AbsenceTableheader from "../atoms/AbsenceTable/AbsenceTableheader";
import AbsenceTableLine from "../atoms/AbsenceTable/AbsenceTableLine";
import { table as tables } from "@/utils/fakeDatas";
import CustomButton from "../atoms/Button";
import { useState, useEffect } from "react";
import { Select } from "chakra-react-select";
import { users } from "@/utils/chakraSelectDatas";
import { set, useForm } from "react-hook-form";

const AbsenceTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDuplicate, setIsDuplicate] = useState(false);
  useEffect(() => {
    const storedAbsences = localStorage.getItem("absences");
    console.log(storedAbsences);
    if (storedAbsences) {
      setTable(JSON.parse(storedAbsences));
    }
  }, []);
  const [table, setTable] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();
  const handleAddAbsence = (data: any) => {
    setIsDuplicate(false);
    const { user, category, period } = data;
    const isDuplicate = table.some(
      (absence) =>
        absence.user === user.label &&
        absence.category === category &&
        absence.period === period
    );
    console.log(isDuplicate);
    if (isDuplicate) {
      console.error(
        "Une entrée avec le même utilisateur, catégorie, et période existe déjà."
      );
      setIsDuplicate(true);
      return;
    }
    const newData = { ...data, user: data.user.label };
    const newTableData = [...table, newData];
    setTable(newTableData);
    localStorage.setItem("absences", JSON.stringify(newTableData));
    if (!isDuplicate) {
      reset();
      onClose();
    }
  };
  const handleRemoveAbsence = (index: any) => {
    const newTableData = table.filter((_, i) => i !== index);

    setTable(newTableData);
    localStorage.setItem("absences", JSON.stringify(newTableData));
  };

  return (
    <Box>
      <Flex justify="end" mb="15px">
        <CustomButton onClick={onOpen}>Ajouter une absence</CustomButton>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter une absence</ModalHeader>
          <ModalCloseButton />
          <ModalBody as="form" onSubmit={handleSubmit(handleAddAbsence)}>
            <FormControl>
              <FormLabel>Utilisateur</FormLabel>
              <Select
                {...register("user", {
                  required: "Ce champ est requis", // Ajoutez la règle de validation ici
                })}
                onChange={(value) => setValue("user", value)}
                options={users}
              />
            </FormControl>
            {errors.user && (
              <Text color="red.500">{errors.user.message as any}</Text>
            )}
            <FormControl mt={3}>
              <FormLabel>Catégorie</FormLabel>
              <Input
                {...register("category", {
                  required: "Ce champs est requis",
                })}
                type="text"
              />
            </FormControl>
            {errors.category && (
              <Text color="red.500">{errors.category.message as any}</Text>
            )}
            <FormControl mt={3}>
              <FormLabel>Période</FormLabel>
              <Input
                {...register("period", {
                  required: "Ce champs est requis",
                })}
                type="date"
              />
              {errors.period && (
                <Text color="red.500">{errors.period.message as any}</Text>
              )}
            </FormControl>

            <FormControl mt={3}>
              <FormLabel>Solde actuel</FormLabel>
              <Input
                {...register("currentBalance", {
                  required: "Ce champs est requis",
                })}
                type="number"
              />
              {errors.currentBalance && (
                <Text color="red.500">
                  {errors.currentBalance.message as any}
                </Text>
              )}
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Solde pris</FormLabel>
              <Input
                {...register("balanceTaken", {
                  required: "Ce champs est requis",
                })}
                type="number"
              />
              {errors.balanceTaken && (
                <Text color="red.500">
                  {errors.balanceTaken.message as any}
                </Text>
              )}
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Solde futur</FormLabel>
              <Input
                {...register("futureBalance", {
                  required: "Ce champs est requis",
                })}
                type="number"
              />
              {errors.futureBalance && (
                <Text color="red.500">
                  {errors.futureBalance.message as any}
                </Text>
              )}
            </FormControl>
            {isDuplicate && (
              <Flex justify="center" align="center" h="80px">
                <Text color="red.500">
                  Une entrée avec le même utilisateur, catégorie, et période
                  existe déjà.
                </Text>
              </Flex>
            )}
            <Flex justify="flex-end" mt={5}>
              <CustomButton type="submit" ml={3}>
                Valider
              </CustomButton>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <AbsenceTableheader />
      {table?.map((item, index) => (
        <AbsenceTableLine
          key={index}
          item={item}
          number={index}
          length={table.length}
          onRemove={() => handleRemoveAbsence(index)}
        />
      ))}
      {!table.length && (
        <Flex justify="center" align="center" h="80px">
          <Text>Aucune absence n'a été ajoutée</Text>
        </Flex>
      )}
    </Box>
  );
};

export default AbsenceTable;
