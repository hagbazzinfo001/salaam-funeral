'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Users, DollarSign, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface Heir {
  name: string;
  relationship: string;
  share: number;
  amount: number;
}

export function InheritanceCalculator() {
  const [totalEstate, setTotalEstate] = useState<string>('');
  const [debts, setDebts] = useState<string>('');
  const [funeralCosts, setFuneralCosts] = useState<string>('');
  const [survivors, setSurvivors] = useState({
    spouse: false,
    sons: 0,
    daughters: 0,
    father: false,
    mother: false,
    brothers: 0,
    sisters: 0,
  });
  const [results, setResults] = useState<Heir[]>([]);
  const [showResults, setShowResults] = useState(false);

  const calculateInheritance = () => {
    const estate = parseFloat(totalEstate) || 0;
    const totalDebts = parseFloat(debts) || 0;
    const funeral = parseFloat(funeralCosts) || 0;
    const netEstate = estate - totalDebts - funeral;

    if (netEstate <= 0) {
      alert('Net estate must be positive after deducting debts and funeral costs.');
      return;
    }

    const heirs: Heir[] = [];
    let remainingEstate = netEstate;

    // Simplified Islamic inheritance calculation
    // This is a basic implementation - real Islamic inheritance law is much more complex

    // Spouse's share
    if (survivors.spouse) {
      const spouseShare = (survivors.sons > 0 || survivors.daughters > 0) ? 1/8 : 1/4;
      const spouseAmount = netEstate * spouseShare;
      heirs.push({
        name: 'Spouse',
        relationship: 'Spouse',
        share: spouseShare * 100,
        amount: spouseAmount,
      });
      remainingEstate -= spouseAmount;
    }

    // Parents' shares
    if (survivors.father) {
      const fatherShare = (survivors.sons > 0 || survivors.daughters > 0) ? 1/6 : 1/4;
      const fatherAmount = netEstate * fatherShare;
      heirs.push({
        name: 'Father',
        relationship: 'Father',
        share: fatherShare * 100,
        amount: fatherAmount,
      });
      remainingEstate -= fatherAmount;
    }

    if (survivors.mother) {
      const motherShare = (survivors.sons > 0 || survivors.daughters > 0 || survivors.brothers > 1 || survivors.sisters > 1) ? 1/6 : 1/3;
      const motherAmount = netEstate * motherShare;
      heirs.push({
        name: 'Mother',
        relationship: 'Mother',
        share: motherShare * 100,
        amount: motherAmount,
      });
      remainingEstate -= motherAmount;
    }

    // Children's shares (residue after fixed shares)
    const totalChildren = survivors.sons + survivors.daughters;
    if (totalChildren > 0) {
      const childrenShare = remainingEstate;
      const shareUnit = childrenShare / (survivors.sons * 2 + survivors.daughters);
      
      if (survivors.sons > 0) {
        const sonAmount = shareUnit * 2;
        heirs.push({
          name: `Sons (${survivors.sons})`,
          relationship: 'Son',
          share: (sonAmount * survivors.sons / netEstate) * 100,
          amount: sonAmount * survivors.sons,
        });
      }

      if (survivors.daughters > 0) {
        const daughterAmount = shareUnit;
        heirs.push({
          name: `Daughters (${survivors.daughters})`,
          relationship: 'Daughter',
          share: (daughterAmount * survivors.daughters / netEstate) * 100,
          amount: daughterAmount * survivors.daughters,
        });
      }
    }

    setResults(heirs);
    setShowResults(true);
  };

  const chartData = results.map((heir, index) => ({
    name: heir.name,
    value: heir.amount,
    percentage: heir.share.toFixed(1),
    fill: index % 2 === 0 ? '#22c55e' : '#eab308',
  }));

  return (
    <div id="inheritance-calculator">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-center mb-6">
          <div className="bg-islamic-100 p-4 rounded-full mr-4">
            <Calculator className="text-islamic-600" size={32} />
          </div>
          <h2 className="text-4xl font-bold text-gradient">Islamic Inheritance Calculator</h2>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate inheritance distribution according to Islamic Shariah law. This tool provides 
          a basic calculation - consult with scholars for complex situations.
        </p>
      </motion.div>

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
                <FileText className="mr-2 text-islamic-600" size={24} />
                Estate Information
              </CardTitle>
              <CardDescription>
                Enter the deceased&#39;s estate details and surviving family members.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="totalEstate">Total Estate Value ($)</Label>
                  <Input
                    id="totalEstate"
                    type="number"
                    value={totalEstate}
                    onChange={(e) => setTotalEstate(e.target.value)}
                    placeholder="Enter total estate value"
                  />
                </div>
                <div>
                  <Label htmlFor="debts">Outstanding Debts ($)</Label>
                  <Input
                    id="debts"
                    type="number"
                    value={debts}
                    onChange={(e) => setDebts(e.target.value)}
                    placeholder="Enter total debts"
                  />
                </div>
                <div>
                  <Label htmlFor="funeralCosts">Funeral Costs ($)</Label>
                  <Input
                    id="funeralCosts"
                    type="number"
                    value={funeralCosts}
                    onChange={(e) => setFuneralCosts(e.target.value)}
                    placeholder="Enter funeral costs"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg flex items-center">
                  <Users className="mr-2 text-islamic-600" size={20} />
                  Surviving Family Members
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="spouse"
                      checked={survivors.spouse}
                      onCheckedChange={(checked) => 
                        setSurvivors(prev => ({ ...prev, spouse: !!checked }))
                      }
                    />
                    <Label htmlFor="spouse">Spouse</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="father"
                      checked={survivors.father}
                      onCheckedChange={(checked) => 
                        setSurvivors(prev => ({ ...prev, father: !!checked }))
                      }
                    />
                    <Label htmlFor="father">Father</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="mother"
                      checked={survivors.mother}
                      onCheckedChange={(checked) => 
                        setSurvivors(prev => ({ ...prev, mother: !!checked }))
                      }
                    />
                    <Label htmlFor="mother">Mother</Label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sons">Number of Sons</Label>
                    <Input
                      id="sons"
                      type="number"
                      min="0"
                      value={survivors.sons}
                      onChange={(e) => setSurvivors(prev => ({ ...prev, sons: parseInt(e.target.value) || 0 }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="daughters">Number of Daughters</Label>
                    <Input
                      id="daughters"
                      type="number"
                      min="0"
                      value={survivors.daughters}
                      onChange={(e) => setSurvivors(prev => ({ ...prev, daughters: parseInt(e.target.value) || 0 }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="brothers">Number of Brothers</Label>
                    <Input
                      id="brothers"
                      type="number"
                      min="0"
                      value={survivors.brothers}
                      onChange={(e) => setSurvivors(prev => ({ ...prev, brothers: parseInt(e.target.value) || 0 }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="sisters">Number of Sisters</Label>
                    <Input
                      id="sisters"
                      type="number"
                      min="0"
                      value={survivors.sisters}
                      onChange={(e) => setSurvivors(prev => ({ ...prev, sisters: parseInt(e.target.value) || 0 }))}
                    />
                  </div>
                </div>
              </div>

              <Button onClick={calculateInheritance} className="w-full btn-islamic">
                Calculate Inheritance
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
                <DollarSign className="mr-2 text-gold-600" size={24} />
                Inheritance Distribution
              </CardTitle>
              <CardDescription>
                Distribution according to Islamic inheritance law.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showResults ? (
                <div className="space-y-6">
                  {/* Chart */}
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Amount']}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Detailed Results */}
                  <div className="space-y-3">
                    {results.map((heir, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-semibold">{heir.name}</div>
                          <div className="text-sm text-gray-600">{heir.share.toFixed(1)}%</div>
                        </div>
                        <div className="text-lg font-bold text-islamic-600">
                          ${heir.amount.toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Disclaimer:</strong> This is a simplified calculation for basic scenarios. 
                      Islamic inheritance law is complex with many exceptions and special cases. 
                      Please consult with qualified Islamic scholars or legal experts for accurate calculations.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Calculator size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Enter estate information and calculate to see results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}