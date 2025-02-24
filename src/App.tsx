import React, { useState } from 'react';
import {
  FileText,
  AlertCircle,
  Activity,
  Heart,
  Pill,
  Calculator,
} from 'lucide-react';

interface TabProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
  color?: string;
}

interface ExpandableItemProps {
  title: string;
  children: React.ReactNode;
  expanded: boolean;
  onToggle: () => void;
  color?: string;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  color?: string;
}

const DislipidemiaStudy = () => {
  const [activeTab, setActiveTab] = useState('conceitos');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  const colors = {
    primary: {
      light: '#E3F2FD',
      main: '#2196F3',
      dark: '#1976D2',
    },
    risk: {
      veryHigh: '#D32F2F',
      high: '#F57C00',
      medium: '#FDD835',
      low: '#43A047',
    },
    accent: {
      purple: '#7E57C2',
      teal: '#009688',
      brown: '#795548',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      light: '#FAFAFA',
    },
  };

  const toggleItem = (section: string, item: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [`${section}-${item}`]: !prev[`${section}-${item}`],
    }));
  };

  // Dados enriquecidos
  const conceitosBasicos = {
    definicao: [
      'Distúrbio metabólico caracterizado por alterações nos níveis séricos das lipoproteínas',
      'Principal consequência: Aterosclerose - processo inflamatório crônico da parede arterial',
      'Doenças cardiovasculares: principal causa de mortalidade global',
      'Hipertrigliceridemia severa (>1000 mg/dL): risco de pancreatite aguda',
      'Impacto significativo na saúde pública e custos em saúde',
    ],
    fisiopatologia: [
      'Metabolismo lipídico alterado',
      'Acúmulo de lipoproteínas aterogênicas',
      'Processo inflamatório vascular',
      'Formação de placas ateroscleróticas',
      'Disfunção endotelial',
    ],
    manifestacoes: [
      'Maioria assintomática até eventos cardiovasculares',
      'Xantoma tendinoso: patognomônico de hipercolesterolemia familiar',
      'Xantelasma: depósitos lipídicos palpebrais',
      'Arco corneano: antes dos 45 anos sugere dislipidemia',
      'Sinais de aterosclerose em diferentes territórios',
    ],
  };

  const avaliacaoClinica = {
    anamnese: [
      'História familiar de DCV precoce',
      'Eventos cardiovasculares prévios',
      'Comorbidades (HAS, DM, obesidade)',
      'Hábitos de vida (dieta, atividade física)',
      'Uso de medicações que afetam perfil lipídico',
      'Sinais de dislipidemia familiar',
    ],
    exames: {
      basicos: [
        'Colesterol Total',
        'HDL-colesterol',
        'LDL-colesterol (direto ou calculado)',
        'Triglicerídeos',
        'Glicemia jejum',
        'TSH (rastreio hipotiroidismo)',
      ],
      complementares: [
        'Apolipoproteína B',
        'Lipoproteína (a)',
        'PCR ultrassensível',
        'Enzimas hepáticas',
        'Creatinina sérica',
      ],
    },
  };

  const causasSecundarias = [
    {
      tipo: 'Hipercolesterolemia',
      causas: [
        'Hipotiroidismo (↓ receptores LDL)',
        'Síndrome nefrótica (↑ síntese hepática)',
        'Colestase (↓ excreção biliar)',
        'Hepatopatia crônica',
        'Obesidade',
        'Anorexia nervosa',
        'Porfiria aguda',
        'Síndrome de Cushing',
      ],
    },
    {
      tipo: 'Hipertrigliceridemia',
      causas: [
        'Diabetes mellitus descompensado',
        'Obesidade central',
        'Etilismo',
        'Doença renal crônica',
        'Infecção por HIV/TARV',
        'Hipotireoidismo',
        'Gravidez (3º trimestre)',
        'Doenças autoimunes',
        'Estresse agudo',
      ],
    },
  ];

  const medicamentosEfeitos = [
    {
      categoria: 'Aumento TG e Redução HDL',
      medicamentos: [
        'Diuréticos tiazídicos (hidroclorotiazida, clortalidona, indapamida)',
        'Betabloqueadores não seletivos',
        'Anticoncepcionais orais',
        'Terapia de reposição hormonal',
        'Isotretinoína',
      ],
    },
    {
      categoria: 'Aumento Colesterol e TG',
      medicamentos: [
        'Glicocorticoides sistêmicos',
        'Ciclosporina',
        'Tacrolimus',
        'Sirolimus',
        'Interferons',
      ],
    },
    {
      categoria: 'Aumento TG, LDL e Redução HDL',
      medicamentos: [
        'Inibidores de protease (darunavir, ritonavir)',
        'Antipsicóticos atípicos',
        'L-asparaginase',
        'Androgênios',
        'Tamoxifeno',
      ],
    },
  ];

  const riscosCardio = [
    {
      nivel: 'Muito Alto Risco',
      criterios: [
        'Evento cardiovascular prévio documentado',
        'Doença aterosclerótica significativa (>50% obstrução)',
        'Aneurisma de aorta abdominal',
        'Diabetes + LOA ou ≥3 FR maiores',
        'DRC grave (TFG <30 mL/min)',
        'Aterosclerose subclínica grave',
        'LDL-c ≥190 mg/dL',
      ],
      meta: 'LDL < 50 mg/dL',
    },
    {
      nivel: 'Alto Risco',
      criterios: [
        'Risco calculado ≥20% em 10 anos',
        'Diabetes sem critérios de muito alto risco',
        'HAS com PA ≥180/110 mmHg',
        'Aterosclerose subclínica documentada',
        'Hipercolesterolemia familiar',
        'DRC moderada (TFG 30-59 mL/min)',
      ],
      meta: 'LDL < 70 mg/dL',
    },
    {
      nivel: 'Risco Intermediário',
      criterios: [
        'Risco 7,5% a <20% em 10 anos',
        'Diabetes tipo 1 <35 anos',
        'HAS com PA <180/110 mmHg',
        'História familiar de DCV precoce',
      ],
      meta: 'LDL < 100 mg/dL',
    },
    {
      nivel: 'Risco Borderline',
      criterios: [
        '5% a 7,5% em 10 anos',
        'Fatores agravantes podem reclassificar',
      ],
      meta: 'LDL < 130 mg/dL',
    },
    {
      nivel: 'Baixo Risco',
      criterios: [
        '<5% em 10 anos',
        'Ausência de fatores agravantes',
        'Sem doença aterosclerótica',
      ],
      meta: 'LDL < 130 mg/dL',
    },
  ];

  const estatinas = [
    {
      potencia: 'Alta Potência',
      medicamentos: [
        'Rosuvastatina 20-40 mg/dia (↓LDL 45-60%)',
        'Atorvastatina 40-80 mg/dia (↓LDL 45-60%)',
      ],
      indicacoes: [
        'Muito alto risco CV',
        'Alto risco CV',
        'LDL muito elevado (≥190 mg/dL)',
        'Prevenção secundária',
      ],
    },
    {
      potencia: 'Moderada Potência',
      medicamentos: [
        'Rosuvastatina 5-10 mg/dia (↓LDL 30-45%)',
        'Atorvastatina 10-20 mg/dia (↓LDL 30-45%)',
        'Sinvastatina 20-40 mg/dia (↓LDL 30-40%)',
        'Pitavastatina 2-4 mg/dia (↓LDL 30-40%)',
      ],
      indicacoes: [
        'Risco intermediário',
        'Idosos',
        'Intolerância a altas doses',
      ],
    },
    {
      potencia: 'Baixa Potência',
      medicamentos: [
        'Sinvastatina 10 mg/dia (↓LDL <30%)',
        'Pravastatina 10-20 mg/dia (↓LDL <30%)',
        'Pitavastatina 1 mg/dia (↓LDL <30%)',
      ],
      indicacoes: [
        'Baixo risco CV',
        'Prevenção primária',
        'Início de tratamento',
      ],
    },
  ];

  const tratamentoAdicional = {
    ezetimiba: {
      descricao: 'Inibidor da absorção de colesterol',
      dose: '10 mg/dia',
      indicacoes: [
        'Meta não atingida com estatina',
        'Intolerância a estatinas',
        'Complemento em alto risco',
      ],
    },
    pcsk9: {
      descricao: 'Anticorpos monoclonais anti-PCSK9',
      opcoes: [
        'Evolocumabe 140 mg 2/2 sem ou 420 mg 1x/mês',
        'Alirocumabe 75-150 mg 2/2 sem',
      ],
      indicacoes: [
        'Muito alto risco sem meta',
        'HF grave',
        'Intolerância a estatinas',
      ],
    },
  };

  const monitoramento = {
    inicial: [
      'Perfil lipídico completo',
      'Enzimas hepáticas',
      'CPK basal',
      'Avaliação de risco CV',
    ],
    seguimento: [
      '4-12 semanas após início/ajuste',
      'Perfil lipídico cada 3-12 meses',
      'Enzimas hepáticas anual',
      'CPK se sintomas musculares',
    ],
    eventos: [
      'CPK >10x: suspender estatina',
      'TGO/TGP >3x: reduzir/suspender',
      'Mialgia: avaliar caso a caso',
      'Diabetes: manter benefício CV',
    ],
  };

  const Tab: React.FC<TabProps> = ({ active, children, onClick, color }) => (
    <button
      onClick={onClick}
      style={{
        backgroundColor: active ? color : '#ffffff',
        color: active ? '#ffffff' : '#000000',
        padding: '8px 16px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontWeight: '500',
        transition: 'all 0.3s ease',
      }}
    >
      {children}
    </button>
  );
  const ExpandableItem: React.FC<ExpandableItemProps> = ({
    title,
    children,
    expanded,
    onToggle,
    color = colors.primary.main,
  }) => (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        marginBottom: '8px',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease',
        boxShadow: expanded ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px',
          fontWeight: '500',
          backgroundColor: expanded ? color : 'white',
          color: expanded ? 'white' : colors.text.primary,
          transition: 'all 0.3s ease',
          textAlign: 'left',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {title}
        <span
          style={{
            transform: expanded ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.3s ease',
            display: 'inline-block',
          }}
        >
          ▼
        </span>
      </button>
      {expanded && (
        <div
          style={{
            padding: '16px',
            borderTop: '1px solid #e5e7eb',
            backgroundColor: 'white',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );

  const Section: React.FC<SectionProps> = ({
    title,
    children,
    color = colors.accent.purple,
  }) => (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        padding: '24px',
        borderLeft: `4px solid ${color}`,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginBottom: '24px',
      }}
    >
      <h2
        style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          marginBottom: '16px',
          color: color,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {children}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'conceitos':
        return (
          <Section title="Conceitos Básicos" color={colors.accent.purple}>
            <ExpandableItem
              title="Definição e Fisiopatologia"
              expanded={expandedItems['conceitos-definicao']}
              onToggle={() => toggleItem('conceitos', 'definicao')}
              color={colors.accent.purple}
            >
              <ul className="list-disc pl-6 space-y-2">
                {conceitosBasicos.definicao.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h4 className="font-medium mt-4 mb-2">Fisiopatologia:</h4>
              <ul className="list-disc pl-6 space-y-2">
                {conceitosBasicos.fisiopatologia.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </ExpandableItem>

            <ExpandableItem
              title="Manifestações Clínicas"
              expanded={expandedItems['conceitos-manifestacoes']}
              onToggle={() => toggleItem('conceitos', 'manifestacoes')}
              color={colors.accent.purple}
            >
              <ul className="list-disc pl-6 space-y-2">
                {conceitosBasicos.manifestacoes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </ExpandableItem>
          </Section>
        );

      case 'avaliacao':
        return (
          <Section title="Avaliação Clínica" color={colors.accent.teal}>
            <ExpandableItem
              title="Anamnese Direcionada"
              expanded={expandedItems['avaliacao-anamnese']}
              onToggle={() => toggleItem('avaliacao', 'anamnese')}
              color={colors.accent.teal}
            >
              <ul className="list-disc pl-6 space-y-2">
                {avaliacaoClinica.anamnese.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </ExpandableItem>

            <ExpandableItem
              title="Exames Laboratoriais"
              expanded={expandedItems['avaliacao-exames']}
              onToggle={() => toggleItem('avaliacao', 'exames')}
              color={colors.accent.teal}
            >
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Exames Básicos:</h4>
                  <ul className="list-disc pl-6">
                    {avaliacaoClinica.exames.basicos.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Exames Complementares:</h4>
                  <ul className="list-disc pl-6">
                    {avaliacaoClinica.exames.complementares.map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="font-medium">Fórmula de Friedewald:</p>
                  <p className="font-mono mt-2">
                    LDL = Colesterol Total - HDL - (Triglicerídeos/5)
                  </p>
                  <p className="text-red-600 mt-2">
                    * Não aplicável quando triglicerídeos &gt; 400 mg/dL
                  </p>
                </div>
              </div>
            </ExpandableItem>
          </Section>
        );

      case 'causas':
        return (
          <Section title="Causas e Medicamentos" color={colors.accent.brown}>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Causas Secundárias
                </h3>
                {causasSecundarias.map((tipo, index) => (
                  <div
                    key={index}
                    className="mb-6 p-4 rounded-lg"
                    style={{ backgroundColor: colors.primary.light }}
                  >
                    <h4 className="font-medium mb-2">{tipo.tipo}</h4>
                    <ul className="list-disc pl-6">
                      {tipo.causas.map((causa, i) => (
                        <li key={i}>{causa}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Medicamentos que Afetam o Perfil Lipídico
                </h3>
                {medicamentosEfeitos.map((grupo, index) => (
                  <div key={index} className="mb-4 p-4 rounded-lg border">
                    <h4 className="font-medium mb-2">{grupo.categoria}</h4>
                    <ul className="list-disc pl-6">
                      {grupo.medicamentos.map((med, i) => (
                        <li key={i}>{med}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        );

      case 'riscos':
        return (
          <Section title="Estratificação de Risco" color={colors.risk.high}>
            <div className="space-y-6">
              {riscosCardio.map((risco, index) => {
                let riskColor;
                switch (risco.nivel) {
                  case 'Muito Alto Risco':
                    riskColor = colors.risk.veryHigh;
                    break;
                  case 'Alto Risco':
                    riskColor = colors.risk.high;
                    break;
                  case 'Risco Intermediário':
                    riskColor = colors.risk.medium;
                    break;
                  default:
                    riskColor = colors.risk.low;
                }

                return (
                  <div
                    key={index}
                    className="p-4 rounded-lg border-l-4"
                    style={{
                      borderColor: riskColor,
                      backgroundColor: `${riskColor}10`,
                    }}
                  >
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: riskColor }}
                    >
                      {risco.nivel}
                    </h3>
                    <div className="pl-4">
                      <p className="font-medium mb-2">Meta: {risco.meta}</p>
                      <ul className="list-disc pl-6">
                        {risco.criterios.map((criterio, i) => (
                          <li key={i}>{criterio}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>
        );

      case 'tratamento':
        return (
          <Section title="Tratamento" color={colors.accent.teal}>
            <ExpandableItem
              title="Estatinas por Potência"
              expanded={expandedItems['tratamento-estatinas']}
              onToggle={() => toggleItem('tratamento', 'estatinas')}
              color={colors.accent.teal}
            >
              {estatinas.map((grupo, index) => (
                <div key={index} className="mb-6 p-4 rounded-lg border">
                  <h4 className="font-medium mb-2">{grupo.potencia}</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-medium mb-1">
                        Medicamentos:
                      </h5>
                      <ul className="list-disc pl-6">
                        {grupo.medicamentos.map((med, i) => (
                          <li key={i}>{med}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium mb-1">Indicações:</h5>
                      <ul className="list-disc pl-6">
                        {grupo.indicacoes.map((ind, i) => (
                          <li key={i}>{ind}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </ExpandableItem>

            <ExpandableItem
              title="Terapias Adicionais"
              expanded={expandedItems['tratamento-adicional']}
              onToggle={() => toggleItem('tratamento', 'adicional')}
              color={colors.accent.teal}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Ezetimiba</h4>
                  <p className="mb-2">
                    {tratamentoAdicional.ezetimiba.descricao}
                  </p>
                  <p className="mb-2">
                    Dose: {tratamentoAdicional.ezetimiba.dose}
                  </p>
                  <h5 className="text-sm font-medium mb-1">Indicações:</h5>
                  <ul className="list-disc pl-6">
                    {tratamentoAdicional.ezetimiba.indicacoes.map((ind, i) => (
                      <li key={i}>{ind}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Inibidores de PCSK9</h4>
                  <p className="mb-2">{tratamentoAdicional.pcsk9.descricao}</p>
                  <h5 className="text-sm font-medium mb-1">Opções:</h5>
                  <ul className="list-disc pl-6">
                    {tratamentoAdicional.pcsk9.opcoes.map((op, i) => (
                      <li key={i}>{op}</li>
                    ))}
                  </ul>
                  <h5 className="text-sm font-medium mb-1 mt-2">Indicações:</h5>
                  <ul className="list-disc pl-6">
                    {tratamentoAdicional.pcsk9.indicacoes.map((ind, i) => (
                      <li key={i}>{ind}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ExpandableItem>

            <ExpandableItem
              title="Monitoramento"
              expanded={expandedItems['tratamento-monitoramento']}
              onToggle={() => toggleItem('tratamento', 'monitoramento')}
              color={colors.accent.teal}
            >
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Avaliação Inicial:</h4>
                  <ul className="list-disc pl-6">
                    {monitoramento.inicial.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Seguimento:</h4>
                  <ul className="list-disc pl-6">
                    {monitoramento.seguimento.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Eventos Adversos:</h4>
                  <ul className="list-disc pl-6">
                    {monitoramento.eventos.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ExpandableItem>
          </Section>
        );

      case 'calculos':
        return (
          <Section title="Cálculos e Metas" color={colors.primary.dark}>
            <div className="space-y-6">
              <div className="p-4 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">
                  Cálculo do LDL (Fórmula de Friedewald)
                </h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="font-mono">
                    LDL = Colesterol Total - HDL - (Triglicerídeos/5)
                  </p>
                  <p className="text-sm text-red-600 mt-2">
                    * Nao aplicavel quando triglicerideos &gt; 400 mg/dL
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">
                  Metas de LDL por Risco Cardiovascular
                </h3>
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-2 text-left">Classificação</th>
                      <th className="p-2 text-left">Meta de LDL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {riscosCardio.map((risco, index) => (
                      <tr key={index}>
                        <td className="p-2 border-t">{risco.nivel}</td>
                        <td className="p-2 border-t">{risco.meta}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1
          className="text-2xl font-bold text-center"
          style={{ color: colors.primary.dark }}
        >
          Dislipidemia e Estratificação de Risco Cardiovascular
        </h1>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '1.5rem',
          overflowX: 'auto',
          padding: '8px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: '0',
          zIndex: 10,
        }}
      >
        <Tab
          active={activeTab === 'conceitos'}
          onClick={() => setActiveTab('conceitos')}
          color={colors.accent.purple}
        >
          <FileText className="w-4 h-4" />
          Conceitos
        </Tab>
        <Tab
          active={activeTab === 'avaliacao'}
          onClick={() => setActiveTab('avaliacao')}
          color={colors.accent.teal}
        >
          <AlertCircle className="w-4 h-4" />
          Avaliação
        </Tab>
        <Tab
          active={activeTab === 'causas'}
          onClick={() => setActiveTab('causas')}
          color={colors.accent.brown}
        >
          <Activity className="w-4 h-4" />
          Causas
        </Tab>
        <Tab
          active={activeTab === 'riscos'}
          onClick={() => setActiveTab('riscos')}
          color={colors.risk.high}
        >
          <Heart className="w-4 h-4" />
          Riscos
        </Tab>
        <Tab
          active={activeTab === 'tratamento'}
          onClick={() => setActiveTab('tratamento')}
          color={colors.accent.teal}
        >
          <Pill className="w-4 h-4" />
          Tratamento
        </Tab>
        <Tab
          active={activeTab === 'calculos'}
          onClick={() => setActiveTab('calculos')}
          color={colors.primary.dark}
        >
          <Calculator className="w-4 h-4" />
          Cálculos
        </Tab>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">{renderContent()}</div>
    </div>
  );
};

export default DislipidemiaStudy;
