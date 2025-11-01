import React, { useState } from 'react';
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
  Button,
  Collapse,
  ButtonGroup,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function ClaroWork() {
  const ventasPorSemana = [
    {
      semana: "Semana 1: 18 Oct 2025 - ",
      dias: [
        { fecha: "13/10/2025", tdi1_chips: 0, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/No_Baucher.png" },
        { fecha: "14/10/2025", tdi1_chips: 0, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/No_Baucher.png" },
        { fecha: "15/10/2025", tdi1_chips: 0, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/No_Baucher.png" },
        { fecha: "16/10/2025", tdi1_chips: 0, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/No_Baucher.png" },
        { fecha: "17/10/2025", tdi1_chips: 0, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/No_Baucher.png" },
        { fecha: "18/10/2025", tdi1_chips: 0, tdi2_chips: 1, tdi3_chips: 1, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 1, tdi2_recargas: 0, tdi3_recargas: 1, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/Deposito_Claro_18_10.jpeg" },
      ]
    },
    {
      semana: "Semana 2: 20-26 Oct 2025",
      dias: [
        { fecha: "20/10/2025", tdi1_chips: 0, tdi2_chips: 3, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/Deposito_Claro_20_10.jpeg" },
        { fecha: "21/10/2025", tdi1_chips: 1, tdi2_chips: 0, tdi3_chips: 1, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/Deposito_Claro_21_10.jpeg" },
        { fecha: "22/10/2025", tdi1_chips: 0, tdi2_chips: 0, tdi3_chips: 1, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/Deposito_Claro_22_10.jpeg" },
        { fecha: "23/10/2025", tdi1_chips: 1, tdi2_chips: 0, tdi3_chips: 1, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/Deposito_Claro_23_10.jpeg" },
        { fecha: "24/10/2025", tdi1_chips: 2, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/Deposito_Claro_24_10.jpeg" },
        { fecha: "25/10/2025", tdi1_chips: 1, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/Deposito_Claro_25_10.jpeg" },
        { fecha: "26/10/2025", tdi1_chips: 0, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/No_Baucher.png" },
      ]
    },
    {
      semana: "Semana 3: 27 Oct - 1 Nov 2025",
      dias: [
        { fecha: "27/10/2025", tdi1_chips: 1, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/Deposito_Claro_27_10.jpeg" },
        { fecha: "28/10/2025", tdi1_chips: 2, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 1, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/Deposito_Claro_28_10.jpeg" },
        { fecha: "29/10/2025", tdi1_chips: 2, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/Deposito_Claro_29_10.jpeg" },
        { fecha: "30/10/2025", tdi1_chips: 0, tdi2_chips: 0, tdi3_chips: 0, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 0, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/No_Baucher.png" },
        { fecha: "31/10/2025", tdi1_chips: 3, tdi2_chips: 0, tdi3_chips: 1, tdi4_chips: 0, tdi5_chips: 0, tdi1_recargas: 0, tdi2_recargas: 0, tdi3_recargas: 1, tdi4_recargas: 0, tdi5_recargas: 0, baucher: "bauchersClaro/Deposito_Claro_31_10.jpeg" },
      ]
    },
  ];

  const precios = { tdi1: 60, tdi2: 85, tdi3: 110, tdi4: 200, tdi5: 300 };

  const [openCharts, setOpenCharts] = useState({});
  const [showGlobalChart, setShowGlobalChart] = useState(false);
  const [chartType, setChartType] = useState({}); // { semanaIdx: 'total', global: 'total' }

  const toggleChart = (idx) => {
    setOpenCharts(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const bg = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const chipBg = useColorModeValue('purple.50', 'purple.900');
  const recargaBg = useColorModeValue('orange.50', 'orange.900');
  const hoverBg = useColorModeValue('gray.50', 'gray.600');
  const resumenBg = useColorModeValue('gray.50', 'gray.600');
  const chartColor = useColorModeValue('#8884d8', '#82ca9d');
  const totalChartColor = useColorModeValue('#3182ce', '#63b3ed');
  const altasColor = useColorModeValue('#9f7aea', '#d6bcfa');
  const chipsColor = useColorModeValue('#805ad5', '#b794f4');
  const recargasColor = useColorModeValue('#dd6b20', '#f6ad55');

  // === CÁLCULO GLOBAL ===
  const globalResumen = ventasPorSemana.reduce((acc, semana) => {
    const semanaResumen = semana.dias.reduce((sAcc, dia) => {
      sAcc.chips.tdi1 += dia.tdi1_chips;
      sAcc.chips.tdi2 += dia.tdi2_chips;
      sAcc.chips.tdi3 += dia.tdi3_chips;
      sAcc.chips.tdi4 += dia.tdi4_chips;
      sAcc.chips.tdi5 += dia.tdi5_chips;
      sAcc.chips.totalVenta +=
        dia.tdi1_chips * precios.tdi1 +
        dia.tdi2_chips * precios.tdi2 +
        dia.tdi3_chips * precios.tdi3 +
        dia.tdi4_chips * precios.tdi4 +
        dia.tdi5_chips * precios.tdi5;
      sAcc.chips.totalAltas += dia.tdi1_chips + dia.tdi2_chips + dia.tdi3_chips + dia.tdi4_chips + dia.tdi5_chips;

      sAcc.recargas.tdi1 += dia.tdi1_recargas;
      sAcc.recargas.tdi2 += dia.tdi2_recargas;
      sAcc.recargas.tdi3 += dia.tdi3_recargas;
      sAcc.recargas.tdi4 += dia.tdi4_recargas;
      sAcc.recargas.tdi5 += dia.tdi5_recargas;
      sAcc.recargas.totalVenta +=
        dia.tdi1_recargas * precios.tdi1 +
        dia.tdi2_recargas * precios.tdi2 +
        dia.tdi3_recargas * precios.tdi3 +
        dia.tdi4_recargas * precios.tdi4 +
        dia.tdi5_recargas * precios.tdi5;

      return sAcc;
    }, { 
      chips: { tdi1: 0, tdi2: 0, tdi3: 0, tdi4: 0, tdi5: 0, totalVenta: 0, totalAltas: 0 }, 
      recargas: { tdi1: 0, tdi2: 0, tdi3: 0, tdi4: 0, tdi5: 0, totalVenta: 0 } 
    });

    const totalSemana = semanaResumen.chips.totalVenta + semanaResumen.recargas.totalVenta;
    const altasSemana = semanaResumen.chips.totalAltas;

    acc.chips.totalVenta += semanaResumen.chips.totalVenta;
    acc.recargas.totalVenta += semanaResumen.recargas.totalVenta;
    acc.semanas.push({
      semana: semana.semana.split(':')[0].trim(),
      total: totalSemana,
      altas: altasSemana,
      chips: semanaResumen.chips.totalVenta,
      recargas: semanaResumen.recargas.totalVenta,
    });

    return acc;
  }, {
    chips: { totalVenta: 0 },
    recargas: { totalVenta: 0 },
    semanas: []
  });

  const totalGlobal = globalResumen.chips.totalVenta + globalResumen.recargas.totalVenta;

  return (
    <Box p={4} bg={bg} minH="calc(100vh - 64px)">
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="lg" textAlign="center" color={textColor}>
          Control de Ventas Claro - Chips y Recargas
        </Heading>

        {/* === SEMANAS === */}
        {ventasPorSemana.map((semana, idx) => {
          const showChart = openCharts[idx] || false;
          const currentType = chartType[idx] || 'total';

          const resumen = semana.dias.reduce((acc, dia) => {
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

          const chartData = semana.dias.map(dia => {
            const totalChips = dia.tdi1_chips * precios.tdi1 + dia.tdi2_chips * precios.tdi2 + dia.tdi3_chips * precios.tdi3 + dia.tdi4_chips * precios.tdi4 + dia.tdi5_chips * precios.tdi5;
            const totalRecargas = dia.tdi1_recargas * precios.tdi1 + dia.tdi2_recargas * precios.tdi2 + dia.tdi3_recargas * precios.tdi3 + dia.tdi4_recargas * precios.tdi4 + dia.tdi5_recargas * precios.tdi5;
            const altasDia = dia.tdi1_chips + dia.tdi2_chips + dia.tdi3_chips + dia.tdi4_chips + dia.tdi5_chips;

            return {
              fecha: dia.fecha.split('/')[0] + '/' + dia.fecha.split('/')[1],
              total: totalChips + totalRecargas,
              altas: altasDia,
              chips: totalChips,
              recargas: totalRecargas,
            };
          });

          const getLineProps = () => {
            switch (currentType) {
              case 'altas': return { dataKey: 'altas', name: 'Altas Diarias', stroke: altasColor };
              case 'chips': return { dataKey: 'chips', name: 'Chips', stroke: chipsColor };
              case 'recargas': return { dataKey: 'recargas', name: 'Recargas', stroke: recargasColor };
              default: return { dataKey: 'total', name: 'Venta Diaria', stroke: chartColor };
            }
          };

          return (
            <Box key={idx} p={5} bg={cardBg} borderRadius="xl" boxShadow="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading size="md" mb={4} color="teal.500" textAlign="center">
                {semana.semana}
              </Heading>

              {/* TABLA */}
              <Box overflowX="auto" mb={6}>
                <TableContainer>
                  <Table variant="simple" size={{ base: 'sm', md: 'md' }}>
                    <Thead>
                      <Tr>
                        <Th rowSpan={2} color={textColor} verticalAlign="middle">FECHA</Th>
                        <Th colSpan={6} textAlign="center" bg={chipBg} color="purple.700">CHIPS (NUEVAS LÍNEAS)</Th>
                        <Th colSpan={6} textAlign="center" bg={recargaBg} color="orange.700">RECARGAS</Th>
                        <Th rowSpan={2} isNumeric>TOTAL DÍA</Th>
                        <Th rowSpan={2}>BAUCHER</Th>
                      </Tr>
                      <Tr>
                        {['1','2','3','4','5'].map(n => <Th key={`c${n}`} isNumeric color="purple.600">TDI {n}</Th>)}
                        <Th isNumeric bg={chipBg} color="purple.800" fontWeight="bold">ALTAS</Th>
                        {['1','2','3','4','5'].map(n => <Th key={`r${n}`} isNumeric color="orange.600">TDI {n}</Th>)}
                        <Th isNumeric bg={recargaBg} color="orange.800" fontWeight="bold">CANT.</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {semana.dias.map((dia, i) => {
                        const totalChipsDia = dia.tdi1_chips * precios.tdi1 + dia.tdi2_chips * precios.tdi2 + dia.tdi3_chips * precios.tdi3 + dia.tdi4_chips * precios.tdi4 + dia.tdi5_chips * precios.tdi5;
                        const totalRecargasDia = dia.tdi1_recargas * precios.tdi1 + dia.tdi2_recargas * precios.tdi2 + dia.tdi3_recargas * precios.tdi3 + dia.tdi4_recargas * precios.tdi4 + dia.tdi5_recargas * precios.tdi5;
                        const totalDia = totalChipsDia + totalRecargasDia;
                        const altasDia = dia.tdi1_chips + dia.tdi2_chips + dia.tdi3_chips + dia.tdi4_chips + dia.tdi5_chips;
                        const cantRecargasDia = dia.tdi1_recargas + dia.tdi2_recargas + dia.tdi3_recargas + dia.tdi4_recargas + dia.tdi5_recargas;

                        return (
                          <Tr key={i} _hover={{ bg: hoverBg }}>
                            <Td fontWeight="medium">{dia.fecha}</Td>
                            <Td isNumeric>{dia.tdi1_chips}</Td>
                            <Td isNumeric>{dia.tdi2_chips}</Td>
                            <Td isNumeric>{dia.tdi3_chips}</Td>
                            <Td isNumeric>{dia.tdi4_chips}</Td>
                            <Td isNumeric>{dia.tdi5_chips}</Td>
                            <Td isNumeric fontWeight="bold" color="purple.700" bg={chipBg}>{altasDia}</Td>
                            <Td isNumeric>{dia.tdi1_recargas}</Td>
                            <Td isNumeric>{dia.tdi2_recargas}</Td>
                            <Td isNumeric>{dia.tdi3_recargas}</Td>
                            <Td isNumeric>{dia.tdi4_recargas}</Td>
                            <Td isNumeric>{dia.tdi5_recargas}</Td>
                            <Td isNumeric fontWeight="bold" color="orange.700" bg={recargaBg}>{cantRecargasDia}</Td>
                            <Td isNumeric fontWeight="bold" color="blue.600">{totalDia} C$</Td>
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

              {/* RESUMEN SEMANA */}
              <Box p={4} bg={resumenBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
                <Text fontWeight="bold" fontSize="lg" mb={3} textAlign="center">
                  Resumen de {semana.semana}
                </Text>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                  <Box textAlign="center">
                    <Badge colorScheme="purple" fontSize="lg" p={3} borderRadius="full" w="100%">CHIPS: {resumen.chips.totalVenta} C$</Badge>
                    <Text fontSize="sm" mt={1} color="purple.600" fontWeight="medium">{resumen.chips.totalAltas} altas</Text>
                    <Text fontSize="xs" color="gray.500">
                      TDI 1: {resumen.chips.tdi1} | TDI 2: {resumen.chips.tdi2} | TDI 3: {resumen.chips.tdi3} | TDI 4: {resumen.chips.tdi4} | TDI 5: {resumen.chips.tdi5}
                    </Text>
                  </Box>
                  <Box textAlign="center">
                    <Badge colorScheme="orange" fontSize="lg" p={3} borderRadius="full" w="100%">RECARGAS: {resumen.recargas.totalVenta} C$</Badge>
                    <Text fontSize="xs" mt={1} color="gray.500">
                      TDI 1: {resumen.recargas.tdi1} | TDI 2: {resumen.recargas.tdi2} | TDI 3: {resumen.recargas.tdi3} | TDI 4: {resumen.recargas.tdi4} | TDI 5: {resumen.recargas.tdi5}
                    </Text>
                  </Box>
                  <Box textAlign="center">
                    <Badge colorScheme="blue" fontSize="xl" p={4} borderRadius="full" w="100%">TOTAL: {totalSemana} C$</Badge>
                  </Box>
                </SimpleGrid>
              </Box>

              {/* BOTÓN + SELECTOR DE GRÁFICA */}
              <Box mt={4} textAlign="center">
                <Button
                  onClick={() => toggleChart(idx)}
                  rightIcon={showChart ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  colorScheme="teal"
                  variant="outline"
                  size="sm"
                  mb={2}
                >
                  {showChart ? 'Ocultar' : 'Mostrar'} gráfica
                </Button>

                <Collapse in={showChart}>
                  <ButtonGroup size="sm" isAttached variant="outline" mt={2}>
                    <Button
                      colorScheme={currentType === 'total' ? 'teal' : 'gray'}
                      onClick={() => setChartType(prev => ({ ...prev, [idx]: 'total' }))}
                    >
                      Venta Total
                    </Button>
                    <Button
                      colorScheme={currentType === 'altas' ? 'purple' : 'gray'}
                      onClick={() => setChartType(prev => ({ ...prev, [idx]: 'altas' }))}
                    >
                      Altas Diarias
                    </Button>
                    <Button
                      colorScheme={currentType === 'chips' ? 'purple' : 'gray'}
                      onClick={() => setChartType(prev => ({ ...prev, [idx]: 'chips' }))}
                    >
                      Chips
                    </Button>
                    <Button
                      colorScheme={currentType === 'recargas' ? 'orange' : 'gray'}
                      onClick={() => setChartType(prev => ({ ...prev, [idx]: 'recargas' }))}
                    >
                      Recargas
                    </Button>
                  </ButtonGroup>
                </Collapse>
              </Box>

              {/* GRÁFICA SEMANAL */}
              <Collapse in={showChart} animateOpacity>
                <Box mt={4} p={4} bg={cardBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="fecha" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip formatter={(value) => currentType === 'altas' ? value : `${value} C$`} />
                      <Legend />
                      <Line type="monotone" {...getLineProps()} strokeWidth={3} dot={{ r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </Collapse>

              {idx < ventasPorSemana.length - 1 && <Divider my={8} />}
            </Box>
          );
        })}

        {/* === GRÁFICA GENERAL + RESUMEN GLOBAL === */}
        <Box p={5} bg={cardBg} borderRadius="xl" boxShadow="lg" borderWidth="1px" borderColor={borderColor}>
          <Box textAlign="center" mb={4}>
            <Button
              onClick={() => setShowGlobalChart(!showGlobalChart)}
              rightIcon={showGlobalChart ? <ChevronUpIcon /> : <ChevronDownIcon />}
              colorScheme="purple"
              variant="solid"
              size="md"
            >
              {showGlobalChart ? 'Ocultar' : 'Mostrar'} Evolución por Semana
            </Button>
          </Box>

          <Collapse in={showGlobalChart} animateOpacity>
            <Box>
              {/* SELECTOR GLOBAL */}
              <Box textAlign="center" mb={4}>
                <ButtonGroup size="md" isAttached variant="outline">
                  <Button
                    colorScheme={chartType.global === 'total' ? 'purple' : 'gray'}
                    onClick={() => setChartType(prev => ({ ...prev, global: 'total' }))}
                  >
                    Venta Semanal
                  </Button>
                  <Button
                    colorScheme={chartType.global === 'altas' ? 'purple' : 'gray'}
                    onClick={() => setChartType(prev => ({ ...prev, global: 'altas' }))}
                  >
                    Altas Semanal
                  </Button>
                  <Button
                    colorScheme={chartType.global === 'chips' ? 'purple' : 'gray'}
                    onClick={() => setChartType(prev => ({ ...prev, global: 'chips' }))}
                  >
                    Chips Semanal
                  </Button>
                  <Button
                    colorScheme={chartType.global === 'recargas' ? 'orange' : 'gray'}
                    onClick={() => setChartType(prev => ({ ...prev, global: 'recargas' }))}
                  >
                    Recargas Semanal
                  </Button>
                </ButtonGroup>
              </Box>

              {/* GRÁFICA GENERAL */}
              <Box p={4} bg={resumenBg} borderRadius="lg" mb={6}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={globalResumen.semanas} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="semana" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip formatter={(value) => chartType.global === 'altas' ? value : `${value} C$`} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey={chartType.global || 'total'}
                      name={
                        chartType.global === 'altas' ? 'Altas Semanal' :
                        chartType.global === 'chips' ? 'Chips Semanal' :
                        chartType.global === 'recargas' ? 'Recargas Semanal' :
                        'Venta Semanal'
                      }
                      stroke={
                        chartType.global === 'altas' ? altasColor :
                        chartType.global === 'chips' ? chipsColor :
                        chartType.global === 'recargas' ? recargasColor :
                        totalChartColor
                      }
                      strokeWidth={4}
                      dot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>

              {/* RESUMEN GLOBAL */}
              <Box p={4} bg={resumenBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
                <Text fontWeight="bold" fontSize="xl" mb={4} textAlign="center" color="purple.600">
                  Ganancias Generadas a Claro
                </Text>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                  <Box textAlign="center">
                    <Badge colorScheme="purple" fontSize="xl" p={4} borderRadius="full" w="100%">
                      CHIPS: {globalResumen.chips.totalVenta} C$
                    </Badge>
                  </Box>
                  <Box textAlign="center">
                    <Badge colorScheme="orange" fontSize="xl" p={4} borderRadius="full" w="100%">
                      RECARGAS: {globalResumen.recargas.totalVenta} C$
                    </Badge>
                  </Box>
                  <Box textAlign="center">
                    <Badge colorScheme="green" fontSize="2xl" p={5} borderRadius="full" w="100%">
                      TOTAL: {totalGlobal} C$
                    </Badge>
                  </Box>
                </SimpleGrid>
              </Box>
            </Box>
          </Collapse>
        </Box>
      </VStack>
    </Box>
  );
}

export default ClaroWork;