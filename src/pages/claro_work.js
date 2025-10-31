import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Image,
  useColorModeValue,
  VStack,
  Heading,
  TableContainer,
  Badge,
  Divider,
  SimpleGrid,
} from '@chakra-ui/react';

function ClaroWork() {
  // === DATOS POR SEMANA (EDITA AQUÍ) ===
  const ventasPorSemana = [
    {
      semana: "Semana 1: 18-24 Oct 2025",
      dias: [
        {
          fecha: "18/10/2025",
          tdi1_chips: 0, tdi2_chips: 1, tdi3_chips: 1, tdi4_chips: 0, tdi5_chips: 0,
          tdi1_recargas: 1, tdi2_recargas: 0, tdi3_recargas: 1, tdi4_recargas: 0, tdi5_recargas: 0,
          baucher: "bauchersClaro/Deposito_Claro_18_10.jpeg"
        },
        {
          fecha: "20/10/2025",
          tdi1_chips: 0, tdi2_chips: 3, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0,
          tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0,
          baucher: "bauchersClaro/Deposito_Claro_20_10.jpeg"
        },
        {
          fecha: "21/10/2025",
          tdi1_chips: 1, tdi2_chips: 0, tdi3_chips: 1, tdi4_chips: 0, tdi5_chips: 0,
          tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0,
          baucher: "bauchersClaro/Deposito_Claro_21_10.jpeg"
        },
        {
          fecha: "22/10/2025",
          tdi1_chips: 0, tdi2_chips: 0, tdi3_chips: 1, tdi4_chips: 0, tdi5_chips: 0,
          tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0,
          baucher: "bauchersClaro/Deposito_Claro_22_10.jpeg"
        },
        {
          fecha: "23/10/2025",
          tdi1_chips: 1, tdi2_chips: 0, tdi3_chips: 1, tdi4_chips: 0, tdi5_chips: 0,
          tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0,
          baucher: "bauchersClaro/Deposito_Claro_23_10.jpeg"
        },
        {
          fecha: "24/10/2025",
          tdi1_chips: 2, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0,
          tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0,
          baucher: "bauchersClaro/Deposito_Claro_24_10.jpeg"
        },
        {
          fecha: "25/10/2025",
          tdi1_chips: 1, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0,
          tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0,
          baucher: "bauchersClaro/Deposito_Claro_25_10.jpeg"
        },
        {
          fecha: "27/10/2025",
          tdi1_chips: 1, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0,
          tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0,
          baucher: "bauchersClaro/Deposito_Claro_27_10.jpeg"
        },
        {
          fecha: "28/10/2025",
          tdi1_chips: 2, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0,
          tdi1_recargas: 0, tdi2_recargas: 1, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0,
          baucher: "bauchersClaro/Deposito_Claro_28_10.jpeg"
        },
        {
          fecha: "29/10/2025",
          tdi1_chips: 2, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0,
          tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0,
          baucher: "bauchersClaro/Deposito_Claro_29_10.jpeg"
        },
        {
          fecha: "/10/2025",
          tdi1_chips: 0, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0,
          tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0,
          baucher: "bauchersClaro/"
        },
      ]
    },
    // Agrega más semanas aquí...
  ];

  const precios = { tdi1: 60, tdi2: 85, tdi3: 110, tdi4: 200, tdi5: 300 };

  // === COLORES ADAPTADOS AL MODO (FUERA DE CUALQUIER MAP) ===
  const bg = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const chipBg = useColorModeValue('purple.50', 'purple.900');
  const recargaBg = useColorModeValue('orange.50', 'orange.900');
  const hoverBg = useColorModeValue('gray.50', 'gray.600');
  const resumenBg = useColorModeValue('gray.50', 'gray.600');

  return (
    <Box p={4} bg={bg} minH="calc(100vh - 64px)">
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="lg" textAlign="center" color={textColor}>
          Control de Ventas Claro - Chips y Recargas
        </Heading>

        {ventasPorSemana.map((semana, idx) => {
          // === RESUMEN DE LA SEMANA ===
          const resumen = semana.dias.reduce((acc, dia) => {
            // CHIPS
            acc.chips.tdi1 += dia.tdi1_chips;
            acc.chips.tdi2 += dia.tdi2_chips;
            acc.chips.tdi3 += dia.tdi3_chips;
            acc.chips.tdi4 += dia.tdi4_chips;
            acc.chips.tdi5 += dia.tdi5_chips;
            acc.chips.totalAltas += dia.tdi1_chips + dia.tdi2_chips + dia.tdi3_chips + dia.tdi4_chips + dia.tdi5_chips;
            acc.chips.totalVenta +=
              dia.tdi1_chips * precios.tdi1 +
              dia.tdi2_chips * precios.tdi2 +
              dia.tdi3_chips * precios.tdi3 +
              dia.tdi4_chips * precios.tdi4 +
              dia.tdi5_chips * precios.tdi5;

            // RECARGAS
            acc.recargas.tdi1 += dia.tdi1_recargas;
            acc.recargas.tdi2 += dia.tdi2_recargas;
            acc.recargas.tdi3 += dia.tdi3_recargas;
            acc.recargas.tdi4 += dia.tdi4_recargas;
            acc.recargas.tdi5 += dia.tdi5_recargas;
            acc.recargas.totalVenta +=
              dia.tdi1_recargas * precios.tdi1 +
              dia.tdi2_recargas * precios.tdi2 +
              dia.tdi3_recargas * precios.tdi3 +
              dia.tdi4_recargas * precios.tdi4 +
              dia.tdi5_recargas * precios.tdi5;

            return acc;
          }, {
            chips: { tdi1: 0, tdi2: 0, tdi3: 0, tdi4: 0, tdi5: 0, totalAltas: 0, totalVenta: 0 },
            recargas: { tdi1: 0, tdi2: 0, tdi3: 0, tdi4: 0, tdi5: 0, totalVenta: 0 }
          });

          const totalSemana = resumen.chips.totalVenta + resumen.recargas.totalVenta;

          return (
            <Box key={idx} p={5} bg={cardBg} borderRadius="xl" boxShadow="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading size="md" mb={4} color="teal.500" textAlign="center">
                {semana.semana}
              </Heading>

              {/* TABLA DE DÍAS */}
              <Box overflowX="auto" mb={6}>
                <TableContainer>
                  <Table variant="simple" size={{ base: 'sm', md: 'md' }}>
                    <Thead>
                      <Tr>
                        <Th rowSpan={2} color={textColor} verticalAlign="middle">FECHA</Th>
                        <Th colSpan={6} textAlign="center" bg={chipBg} color="purple.700">
                          CHIPS (NUEVAS LÍNEAS)
                        </Th>
                        <Th colSpan={6} textAlign="center" bg={recargaBg} color="orange.700">
                          RECARGAS
                        </Th>
                        <Th rowSpan={2} isNumeric>TOTAL DÍA</Th>
                        <Th rowSpan={2}>BAUCHER</Th>
                      </Tr>
                      <Tr>
                        {['1', '2', '3', '4', '5'].map(n => (
                          <Th key={`c${n}`} isNumeric color="purple.600">TDI {n}</Th>
                        ))}
                        <Th isNumeric bg={chipBg} color="purple.800" fontWeight="bold">ALTAS</Th>
                        {['1', '2', '3', '4', '5'].map(n => (
                          <Th key={`r${n}`} isNumeric color="orange.600">TDI {n}</Th>
                        ))}
                        <Th isNumeric bg={recargaBg} color="orange.800" fontWeight="bold">CANT.</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {semana.dias.map((dia, i) => {
                        const totalChipsDia =
                          dia.tdi1_chips * precios.tdi1 +
                          dia.tdi2_chips * precios.tdi2 +
                          dia.tdi3_chips * precios.tdi3 +
                          dia.tdi4_chips * precios.tdi4 +
                          dia.tdi5_chips * precios.tdi5;

                        const totalRecargasDia =
                          dia.tdi1_recargas * precios.tdi1 +
                          dia.tdi2_recargas * precios.tdi2 +
                          dia.tdi3_recargas * precios.tdi3 +
                          dia.tdi4_recargas * precios.tdi4 +
                          dia.tdi5_recargas * precios.tdi5;

                        const totalDia = totalChipsDia + totalRecargasDia;
                        const altasDia = dia.tdi1_chips + dia.tdi2_chips + dia.tdi3_chips + dia.tdi4_chips + dia.tdi5_chips;
                        const cantRecargasDia = dia.tdi1_recargas + dia.tdi2_recargas + dia.tdi3_recargas + dia.tdi4_recargas + dia.tdi5_recargas;

                        return (
                          <Tr key={i} _hover={{ bg: hoverBg }}>
                            <Td fontWeight="medium">{dia.fecha}</Td>
                            {/* CHIPS */}
                            <Td isNumeric>{dia.tdi1_chips}</Td>
                            <Td isNumeric>{dia.tdi2_chips}</Td>
                            <Td isNumeric>{dia.tdi3_chips}</Td>
                            <Td isNumeric>{dia.tdi4_chips}</Td>
                            <Td isNumeric>{dia.tdi5_chips}</Td>
                            <Td isNumeric fontWeight="bold" color="purple.700" bg={chipBg}>
                              {altasDia}
                            </Td>
                            {/* RECARGAS */}
                            <Td isNumeric>{dia.tdi1_recargas}</Td>
                            <Td isNumeric>{dia.tdi2_recargas}</Td>
                            <Td isNumeric>{dia.tdi3_recargas}</Td>
                            <Td isNumeric>{dia.tdi4_recargas}</Td>
                            <Td isNumeric>{dia.tdi5_recargas}</Td>
                            <Td isNumeric fontWeight="bold" color="orange.700" bg={recargaBg}>
                              {cantRecargasDia}
                            </Td>
                            {/* TOTAL DÍA */}
                            <Td isNumeric fontWeight="bold" color="blue.600">
                              {totalDia} C$
                            </Td>
                            {/* BAUCHER */}
                            <Td>
                              <Image
                                src={dia.baucher}
                                alt="Baucher"
                                boxSize="50px"
                                objectFit="cover"
                                borderRadius="md"
                                cursor="pointer"
                                _hover={{ transform: 'scale(1.1)', boxShadow: 'lg' }}
                                transition="0.2s"
                                onClick={() => window.open(dia.baucher, '_blank')}
                                fallbackSrc="https://via.placeholder.com/50?text=Sin+Foto"
                              />
                            </Td>
                          </Tr>
                        );
                      })}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>

              {/* RESUMEN DE SEMANA */}
              <Box p={4} bg={resumenBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
                <Text fontWeight="bold" fontSize="lg" mb={3} textAlign="center">
                  Resumen de {semana.semana}
                </Text>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                  {/* CHIPS */}
                  <Box textAlign="center">
                    <Badge colorScheme="purple" fontSize="lg" p={3} borderRadius="full" w="100%">
                      CHIPS: {resumen.chips.totalVenta} C$
                    </Badge>
                    <Text fontSize="sm" mt={1} color="purple.600" fontWeight="medium">
                      {resumen.chips.totalAltas} altas
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      TDI 1: {resumen.chips.tdi1} | TDI 2: {resumen.chips.tdi2} | TDI 3: {resumen.chips.tdi3} | TDI 4: {resumen.chips.tdi4} | TDI 5: {resumen.chips.tdi5}
                    </Text>
                  </Box>

                  {/* RECARGAS */}
                  <Box textAlign="center">
                    <Badge colorScheme="orange" fontSize="lg" p={3} borderRadius="full" w="100%">
                      RECARGAS: {resumen.recargas.totalVenta} C$
                    </Badge>
                    <Text fontSize="xs" mt={1} color="gray.500">
                      TDI 1: {resumen.recargas.tdi1} | TDI 2: {resumen.recargas.tdi2} | TDI 3: {resumen.recargas.tdi3} | TDI 4: {resumen.recargas.tdi4} | TDI 5: {resumen.recargas.tdi5}
                    </Text>
                  </Box>

                  {/* TOTAL */}
                  <Box textAlign="center">
                    <Badge colorScheme="blue" fontSize="xl" p={4} borderRadius="full" w="100%">
                      TOTAL: {totalSemana} C$
                    </Badge>
                  </Box>
                </SimpleGrid>
              </Box>

              {idx < ventasPorSemana.length - 1 && <Divider my={8} />}
            </Box>
          );
        })}
      </VStack>
    </Box>
  );
}

export default ClaroWork;