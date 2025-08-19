// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Calculator, DollarSign, Coins, TrendingUp } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// interface ZakatResult {
//   category: string;
//   amount: number;
//   zakatDue: number;
//   rate: number;
// }

// export default function ZakatCalculator() {
//   const [cash, setCash] = useState<string>("");
//   const [gold, setGold] = useState<string>("");
//   const [silver, setSilver] = useState<string>("");
//   const [investments, setInvestments] = useState<string>("");
//   const [business, setBusiness] = useState<string>("");
//   const [debts, setDebts] = useState<string>("");
//   const [results, setResults] = useState<ZakatResult[]>([]);
//   const [totalZakat, setTotalZakat] = useState<number>(0);
//   const [showResults, setShowResults] = useState(false);

//   // Nisab values (approximate - should be updated regularly)
//   const GOLD_NISAB = 85; // grams
//   const SILVER_NISAB = 595; // grams
//   const GOLD_PRICE_PER_GRAM = 60; // USD (approximate)
//   const SILVER_PRICE_PER_GRAM = 0.8; // USD (approximate)
//   const ZAKAT_RATE = 0.025; // 2.5%

//   const calculateZakat = () => {
//     const cashAmount = parseFloat(cash) || 0;
//     const goldAmount = parseFloat(gold) || 0;
//     const silverAmount = parseFloat(silver) || 0;
//     const investmentAmount = parseFloat(investments) || 0;
//     const businessAmount = parseFloat(business) || 0;
//     const debtAmount = parseFloat(debts) || 0;

//     const goldNisabValue = GOLD_NISAB * GOLD_PRICE_PER_GRAM;
//     const silverNisabValue = SILVER_NISAB * SILVER_PRICE_PER_GRAM;
//     const nisabThreshold = Math.min(goldNisabValue, silverNisabValue);

//     const totalWealth =
//       cashAmount +
//       goldAmount +
//       silverAmount +
//       investmentAmount +
//       businessAmount -
//       debtAmount;

//     const zakatResults: ZakatResult[] = [];
//     let totalZakatAmount = 0;

//     if (totalWealth >= nisabThreshold) {
//       if (cashAmount > 0) {
//         const zakatDue = cashAmount * ZAKAT_RATE;
//         zakatResults.push({
//           category: "Cash & Savings",
//           amount: cashAmount,
//           zakatDue,
//           rate: ZAKAT_RATE * 100,
//         });
//         totalZakatAmount += zakatDue;
//       }

//       if (goldAmount > 0) {
//         const zakatDue = goldAmount * ZAKAT_RATE;
//         zakatResults.push({
//           category: "Gold",
//           amount: goldAmount,
//           zakatDue,
//           rate: ZAKAT_RATE * 100,
//         });
//         totalZakatAmount += zakatDue;
//       }

//       if (silverAmount > 0) {
//         const zakatDue = silverAmount * ZAKAT_RATE;
//         zakatResults.push({
//           category: "Silver",
//           amount: silverAmount,
//           zakatDue,
//           rate: ZAKAT_RATE * 100,
//         });
//         totalZakatAmount += zakatDue;
//       }

//       if (investmentAmount > 0) {
//         const zakatDue = investmentAmount * ZAKAT_RATE;
//         zakatResults.push({
//           category: "Investments",
//           amount: investmentAmount,
//           zakatDue,
//           rate: ZAKAT_RATE * 100,
//         });
//         totalZakatAmount += zakatDue;
//       }

//       if (businessAmount > 0) {
//         const zakatDue = businessAmount * ZAKAT_RATE;
//         zakatResults.push({
//           category: "Business Assets",
//           amount: businessAmount,
//           zakatDue,
//           rate: ZAKAT_RATE * 100,
//         });
//         totalZakatAmount += zakatDue;
//       }
//     }

//     setResults(zakatResults);
//     setTotalZakat(totalZakatAmount);
//     setShowResults(true);
//   };

//   const chartData = results.map((result) => ({
//     category: result.category,
//     amount: result.amount,
//     zakat: result.zakatDue,
//   }));

//   return (
//     <div id="zakat-calculator">
//       <motion.div
//         className="text-center mb-12 mt-6"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="flex items-center justify-center mb-6">
//           <div className="bg-gold-100 p-4 rounded-full mr-4">
//             <Coins className="text-gold-600" size={32} />
//           </div>
//           <h2 className="text-4xl font-bold text-gradient">Zakat Calculator</h2>
//         </div>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           Calculate your annual Zakat obligation according to Islamic
//           principles. Zakat is one of the Five Pillars of Islam and a
//           fundamental act of worship.
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Input Form */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <Card className="border-0 shadow-lg">
//             <CardHeader>
//               <CardTitle className="flex items-center">
//                 <Calculator className="mr-2 text-gold-600" size={24} />
//                 Wealth Information
//               </CardTitle>
//               <CardDescription>
//                 Enter your assets and debts to calculate Zakat obligation.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Tabs defaultValue="assets" className="w-full">
//                 <TabsList className="grid w-full grid-cols-2">
//                   <TabsTrigger value="assets">Assets</TabsTrigger>
//                   <TabsTrigger value="debts">Debts</TabsTrigger>
//                 </TabsList>

//                 <TabsContent value="assets" className="space-y-4">
//                   <div>
//                     <Label htmlFor="cash">
//                       Cash & Bank Savings ( &#8358; )
//                     </Label>
//                     <Input
//                       id="cash"
//                       type="number"
//                       value={cash}
//                       onChange={(e) => setCash(e.target.value)}
//                       placeholder="Enter cash and savings amount"
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="gold">Gold Value ( &#8358; )</Label>
//                     <Input
//                       id="gold"
//                       type="number"
//                       value={gold}
//                       onChange={(e) => setGold(e.target.value)}
//                       placeholder="Enter gold value"
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="silver">Silver Value ( &#8358; )</Label>
//                     <Input
//                       id="silver"
//                       type="number"
//                       value={silver}
//                       onChange={(e) => setSilver(e.target.value)}
//                       placeholder="Enter silver value"
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="investments">
//                       Investments & Stocks ( &#8358; )
//                     </Label>
//                     <Input
//                       id="investments"
//                       type="number"
//                       value={investments}
//                       onChange={(e) => setInvestments(e.target.value)}
//                       placeholder="Enter investment value"
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="business">
//                       Business Assets ( &#8358; )
//                     </Label>
//                     <Input
//                       id="business"
//                       type="number"
//                       value={business}
//                       onChange={(e) => setBusiness(e.target.value)}
//                       placeholder="Enter business assets value"
//                     />
//                   </div>
//                 </TabsContent>

//                 <TabsContent value="debts" className="space-y-4">
//                   <div>
//                     <Label htmlFor="debts">
//                       Total Outstanding Debts ( &#8358; )
//                     </Label>
//                     <Input
//                       id="debts"
//                       type="number"
//                       value={debts}
//                       onChange={(e) => setDebts(e.target.value)}
//                       placeholder="Enter total debt amount"
//                     />
//                     <p className="text-sm text-gray-600 mt-2">
//                       Include credit cards, loans, mortgages, and other debts
//                     </p>
//                   </div>

//                   <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
//                     <h4 className="font-semibold text-blue-900 mb-2">
//                       Nisab Threshold
//                     </h4>
//                     <p className="text-sm text-blue-800">
//                       Current Nisab (minimum amount): ~ &#8358;
//                       {Math.min(
//                         GOLD_NISAB * GOLD_PRICE_PER_GRAM,
//                         SILVER_NISAB * SILVER_PRICE_PER_GRAM
//                       ).toLocaleString()}
//                     </p>
//                     <p className="text-xs text-blue-700 mt-1">
//                       Based on current gold/silver prices. Your wealth must
//                       exceed this amount for one lunar year.
//                     </p>
//                   </div>
//                 </TabsContent>
//               </Tabs>

//               <Button onClick={calculateZakat} className="w-full btn-gold mt-6">
//                 Calculate Zakat
//               </Button>
//             </CardContent>
//           </Card>
//         </motion.div>

//         {/* Results */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <Card className="border-0 shadow-lg">
//             <CardHeader>
//               <CardTitle className="flex items-center">
//                 <TrendingUp className="mr-2 text-islamic-600" size={24} />
//                 Zakat Calculation Results
//               </CardTitle>
//               <CardDescription>
//                 Your Zakat obligation breakdown.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               {showResults ? (
//                 <div className="space-y-6">
//                   {/* Total Zakat */}
//                   <div className="text-center p-6 bg-islamic-gradient text-white rounded-lg">
//                     <h3 className="text-2xl font-bold mb-2">Total Zakat Due</h3>
//                     <p className="text-4xl font-bold">
//                       &#8358; {totalZakat.toLocaleString()}
//                     </p>
//                     <p className="text-islamic-100 mt-2">
//                       {totalZakat > 0
//                         ? "Zakat is obligatory"
//                         : "No Zakat due (below Nisab threshold)"}
//                     </p>
//                   </div>

//                   {results.length > 0 && (
//                     <>
//                       {/* Chart */}
//                       <div className="h-64">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <BarChart data={chartData}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="category" />
//                             <YAxis />
//                             <Tooltip
//                               formatter={(value: number, name: string) => [
//                                 `  &#8358;   &#8358; {value.toLocaleString()}`,
//                                 name === "amount" ? "Asset Value" : "Zakat Due",
//                               ]}
//                             />
//                             <Bar
//                               dataKey="amount"
//                               fill="#22c55e"
//                               name="amount"
//                             />
//                             <Bar dataKey="zakat" fill="#eab308" name="zakat" />
//                           </BarChart>
//                         </ResponsiveContainer>
//                       </div>

//                       {/* Detailed Results */}
//                       <div className="space-y-3">
//                         {results.map((result, index) => (
//                           <div
//                             key={index}
//                             className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
//                           >
//                             <div>
//                               <div className="font-semibold">
//                                 {result.category}
//                               </div>
//                               <div className="text-sm text-gray-600">
//                                 &#8358; {result.amount.toLocaleString()} ×{" "}
//                                 {result.rate}%
//                               </div>
//                             </div>
//                             <div className="text-lg font-bold text-gold-600">
//                               &#8358; {result.zakatDue.toLocaleString()}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </>
//                   )}

//                   <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
//                     <p className="text-sm text-green-800">
//                       <strong>Important:</strong> Zakat should be paid to
//                       eligible recipients as specified in the Quran. This
//                       includes the poor, needy, those in debt, and other
//                       categories mentioned in Islamic law.
//                     </p>
//                   </div>

//                   <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
//                     <p className="text-sm text-yellow-800">
//                       <strong>Note:</strong> This calculator provides estimates
//                       based on standard rates. Consult with Islamic scholars for
//                       complex situations or specific religious guidance.
//                     </p>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="text-center py-12 text-gray-500">
//                   <Coins size={48} className="mx-auto mb-4 opacity-50" />
//                   <p>
//                     Enter your wealth information and calculate to see Zakat due
//                   </p>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, Coins, TrendingUp } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ZakatResult {
  category: string;
  amount: number;
  zakatDue: number;
  rate: number;
}

export default function ZakatCalculator() {
  const [cash, setCash] = useState<string>("");
  const [gold, setGold] = useState<string>("");
  const [silver, setSilver] = useState<string>("");
  const [investments, setInvestments] = useState<string>("");
  const [business, setBusiness] = useState<string>("");
  const [debts, setDebts] = useState<string>("");
  const [results, setResults] = useState<ZakatResult[]>([]);
  const [totalZakat, setTotalZakat] = useState<number>(0);
  const [showResults, setShowResults] = useState(false);
  const [currency, setCurrency] = useState<string>("USD");
  const [goldPrice, setGoldPrice] = useState<number>(0);
  const [silverPrice, setSilverPrice] = useState<number>(0);

  // Nisab weights
  const GOLD_NISAB = 85; // grams
  const SILVER_NISAB = 595; // grams
  const ZAKAT_RATE = 0.025; // 2.5%

  // Fetch live gold/silver prices from Metals-API
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
          `https://metals-api.com/api/latest?access_key=YOUR_API_KEY&base=${currency}&symbols=XAU,XAG`
        );
        const data = await res.json();
        if (data && data.rates) {
          setGoldPrice(data.rates["XAU"]);
          setSilverPrice(data.rates["XAG"]);
        }
      } catch (err) {
        console.error("Error fetching prices:", err);
      }
    };
    fetchPrices();
  }, [currency]);

  const calculateZakat = () => {
    const cashAmount = parseFloat(cash) || 0;
    const goldAmount = parseFloat(gold) || 0;
    const silverAmount = parseFloat(silver) || 0;
    const investmentAmount = parseFloat(investments) || 0;
    const businessAmount = parseFloat(business) || 0;
    const debtAmount = parseFloat(debts) || 0;

    const goldNisabValue = GOLD_NISAB * goldPrice;
    const silverNisabValue = SILVER_NISAB * silverPrice;
    const nisabThreshold = Math.min(goldNisabValue, silverNisabValue);

    const totalWealth =
      cashAmount +
      goldAmount +
      silverAmount +
      investmentAmount +
      businessAmount -
      debtAmount;

    const zakatResults: ZakatResult[] = [];
    let totalZakatAmount = 0;

    if (totalWealth >= nisabThreshold) {
      const addResult = (category: string, amount: number) => {
        if (amount > 0) {
          const zakatDue = amount * ZAKAT_RATE;
          zakatResults.push({
            category,
            amount,
            zakatDue,
            rate: ZAKAT_RATE * 100,
          });
          totalZakatAmount += zakatDue;
        }
      };

      addResult("Cash & Savings", cashAmount);
      addResult("Gold", goldAmount);
      addResult("Silver", silverAmount);
      addResult("Investments", investmentAmount);
      addResult("Business Assets", businessAmount);
    }

    setResults(zakatResults);
    setTotalZakat(totalZakatAmount);
    setShowResults(true);
  };

  const chartData = results.map((result) => ({
    category: result.category,
    amount: result.amount,
    zakat: result.zakatDue,
  }));

  return (
    <div id="zakat-calculator">
      <motion.div
        className="text-center mb-12 mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gold-100 p-4 rounded-full mr-4">
            <Coins className="text-gold-600" size={32} />
          </div>
          <h2 className="text-4xl font-bold text-gradient">Zakat Calculator</h2>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate your annual Zakat obligation according to Islamic
          principles.
        </p>
      </motion.div>

      {/* Currency Selector */}
      {/* <div className="flex justify-center mb-6">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="USD">USD</option>
          <option value="NGN">NGN</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div> */}
      {/* Currency Selector */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="p-2 border rounded pl-10 appearance-none"
          >
            <option value="USD">
              {" "}
              {currency === "USD" && <ReactCountryFlag countryCode="US" svg />}
              USD
            </option>
            <option value="NGN">🇳🇬 NGN</option>
            <option value="EUR">🇪🇺 EUR</option>
            <option value="GBP">🇬🇧 GBP</option>
            <option value="SAR">🇸🇦 SAR</option>
          </select>
          <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
            {currency === "USD" && <ReactCountryFlag countryCode="US" svg />}
            {currency === "NGN" && <ReactCountryFlag countryCode="NG" svg />}
            {currency === "EUR" && <ReactCountryFlag countryCode="EU" svg />}
            {currency === "GBP" && <ReactCountryFlag countryCode="GB" svg />}
            {currency === "SAR" && <ReactCountryFlag countryCode="SA" svg />}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="mr-2 text-gold-600" size={24} />
                Wealth Information
              </CardTitle>
              <CardDescription>
                Enter your assets and debts to calculate Zakat obligation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="assets" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="assets">Assets</TabsTrigger>
                  <TabsTrigger value="debts">Debts</TabsTrigger>
                </TabsList>

                <TabsContent value="assets" className="space-y-4">
                  <div>
                    <Label htmlFor="cash">
                      Cash & Bank Savings ({currency})
                    </Label>
                    <Input
                      id="cash"
                      type="number"
                      value={cash}
                      onChange={(e) => setCash(e.target.value)}
                      placeholder="Enter cash and savings amount"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gold">Gold Value ({currency})</Label>
                    <Input
                      id="gold"
                      type="number"
                      value={gold}
                      onChange={(e) => setGold(e.target.value)}
                      placeholder="Enter gold value"
                    />
                  </div>
                  <div>
                    <Label htmlFor="silver">Silver Value ({currency})</Label>
                    <Input
                      id="silver"
                      type="number"
                      value={silver}
                      onChange={(e) => setSilver(e.target.value)}
                      placeholder="Enter silver value"
                    />
                  </div>
                  <div>
                    <Label htmlFor="investments">
                      Investments & Stocks ({currency})
                    </Label>
                    <Input
                      id="investments"
                      type="number"
                      value={investments}
                      onChange={(e) => setInvestments(e.target.value)}
                      placeholder="Enter investment value"
                    />
                  </div>
                  <div>
                    <Label htmlFor="business">
                      Business Assets ({currency})
                    </Label>
                    <Input
                      id="business"
                      type="number"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      placeholder="Enter business assets value"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="debts" className="space-y-4">
                  <div>
                    <Label htmlFor="debts">
                      Total Outstanding Debts ({currency})
                    </Label>
                    <Input
                      id="debts"
                      type="number"
                      value={debts}
                      onChange={(e) => setDebts(e.target.value)}
                      placeholder="Enter total debt amount"
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Include credit cards, loans, mortgages, and other debts
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Nisab Threshold
                    </h4>
                    <p className="text-sm text-blue-800">
                      Current Nisab (minimum amount): ~ {currency}{" "}
                      {Math.min(
                        GOLD_NISAB * goldPrice,
                        SILVER_NISAB * silverPrice
                      ).toLocaleString()}
                    </p>
                    <p className="text-xs text-blue-700 mt-1">
                      Based on live gold/silver prices. Your wealth must exceed
                      this amount for one lunar year.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              <Button onClick={calculateZakat} className="w-full btn-gold mt-6">
                Calculate Zakat
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 text-islamic-600" size={24} />
                Zakat Calculation Results
              </CardTitle>
              <CardDescription>
                Your Zakat obligation breakdown.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showResults ? (
                <div className="space-y-6">
                  <div className="text-center p-6 bg-islamic-gradient text-white rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">Total Zakat Due</h3>
                    <p className="text-4xl font-bold">
                      {currency} {totalZakat.toLocaleString()}
                    </p>
                    <p className="text-islamic-100 mt-2">
                      {totalZakat > 0
                        ? "Zakat is obligatory"
                        : "No Zakat due (below Nisab threshold)"}
                    </p>
                  </div>

                  {results.length > 0 && (
                    <>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip
                              formatter={(value: number, name: string) => [
                                `${currency} ${value.toLocaleString()}`,
                                name === "amount" ? "Asset Value" : "Zakat Due",
                              ]}
                            />
                            <Bar
                              dataKey="amount"
                              fill="#22c55e"
                              name="amount"
                            />
                            <Bar dataKey="zakat" fill="#eab308" name="zakat" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>

                      <div className="space-y-3">
                        {results.map((result, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                          >
                            <div>
                              <div className="font-semibold">
                                {result.category}
                              </div>
                              <div className="text-sm text-gray-600">
                                {currency} {result.amount.toLocaleString()} ×{" "}
                                {result.rate}%
                              </div>
                            </div>
                            <div className="text-lg font-bold text-gold-600">
                              {currency} {result.zakatDue.toLocaleString()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Important:</strong> Zakat should be paid to
                      eligible recipients as specified in the Quran.
                    </p>
                  </div>

                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> This calculator provides estimates.
                      Consult scholars for complex cases.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Coins size={48} className="mx-auto mb-4 opacity-50" />
                  <p>
                    Enter your wealth information and calculate to see Zakat due
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
