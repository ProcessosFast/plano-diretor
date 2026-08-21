import { useState } from "react"
import { cn } from "@/lib/utils"
import { EmptyDocPlaceholder } from "@/components/shared/EmptyDocPlaceholder"
import { SignatureBlock } from "@/components/shared/SignatureBlock"
import { FastLogo } from "@/components/shared/FastLogo"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { CSC_POLICY_META, CSC_POLICY_PARTS } from "@/data/cscPolicyContent"
import { ATACADO_POLICY_META, ATACADO_POLICY_PARTS } from "@/data/atacadoPolicyContent"
import { FASTHOMES_COMERCIAL_POLICY_META, FASTHOMES_COMERCIAL_POLICY_PARTS } from "@/data/fastHomesComercialPolicyContent"
import { MAXSTEEL_POLICY_META, MAXSTEEL_POLICY_PARTS } from "@/data/maxsteelPolicyContent"
import { SUPPLY_POLICY_META, SUPPLY_POLICY_PARTS } from "@/data/supplyPolicyContent"
import { LOGEXPRESS_POLICY_META, LOGEXPRESS_POLICY_PARTS } from "@/data/logexpressPolicyContent"
import { OPLOG_POLICY_META, OPLOG_POLICY_PARTS } from "@/data/operacoesLogisticasPolicyContent"
import { UNITY_POLICY_META, UNITY_POLICY_PARTS } from "@/data/unityPolicyContent"
import { DCS_POLICY_META, DCS_POLICY_PARTS } from "@/data/dcsPolicyContent"
import { COMPLIANCE_POLICY_META, COMPLIANCE_POLICY_PARTS } from "@/data/compliancePolicyContent"
import { CONFLITO_POLICY_META, CONFLITO_POLICY_PARTS } from "@/data/conflitoPolicyContent"
import { ENGENHARIA_POLICY_META, ENGENHARIA_POLICY_PARTS } from "@/data/engenhariaPolicyContent"
import { VIAGENS_POLICY_META, VIAGENS_POLICY_PARTS } from "@/data/viagensReembolsoPolicyContent"
import type { PolicyPart } from "@/data/cscPolicyContent"

const OPERACIONAIS_TABS = [
  { id: "maxsteel", label: "MaxSteel" },
  { id: "supply", label: "SUPPLY-LM · Atacado" },
  { id: "dcs", label: "DCS-CM · Varejo" },
  { id: "franquias", label: "FAST Franchising" },
]

const FRONTOFFICE_TABS = [
  { id: "atacado", label: "FAST Atacado" },
  { id: "varejo", label: "FAST Varejo" },
  { id: "obras", label: "FAST Obras & Homes" },
  { id: "atacado-franqueados", label: "Atacado p/ Franqueados" },
  { id: "digital", label: "Comércio Digital" },
  { id: "importacao", label: "FAST Importação" },
]

const BACKOFFICE_TABS = [
  { id: "csc", label: "CSC" },
  { id: "unity", label: "Unity Company" },
  { id: "engenharia", label: "Engenharia" },
  { id: "logexpress", label: "Log Express" },
]

const THEME_TABS = [
  { id: "compliance", label: "Política de Compliance" },
  { id: "conflito", label: "Política de Conflito de Interesses" },
  { id: "viagens", label: "Viagens e Reembolso" },
]

/** Mapa de conclusão: true = política publicada de fato no portal, false = ainda pendente (placeholder). */
export const POLICY_STATUS: Record<string, boolean> = {
  maxsteel: true,
  supply: true,
  dcs: true,
  importacao: false,
  atacado: true,
  varejo: false,
  obras: true,
  franquias: false,
  "atacado-franqueados": false,
  digital: false,
  csc: true,
  unity: true,
  engenharia: true,
  logexpress: true,
  compliance: true,
  conflito: true,
  viagens: true,
}

export interface StatusCategory {
  label: string
  tabs: { id: string; label: string }[]
}

export const POLICY_STATUS_CATEGORIES: StatusCategory[] = [
  { label: "Empresas Operacionais", tabs: OPERACIONAIS_TABS },
  { label: "Empresas Comerciais · Front Office", tabs: FRONTOFFICE_TABS },
  { label: "Empresas Especializadas · Back Office", tabs: BACKOFFICE_TABS },
  { label: "Temáticas transversais", tabs: THEME_TABS },
]

function TabChip({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-2 text-xs font-bold transition-colors",
        active ? "bg-ink text-white border-ink" : "bg-white text-ink-2 border-line hover:bg-soft"
      )}
    >
      {label}
    </button>
  )
}

export function PoliticasInternas() {
  const [active, setActive] = useState("csc")

  return (
    <div className="max-w-4xl mx-auto my-8 px-4 pb-14">
      <h1 className="text-xl font-extrabold text-ink mb-1">Políticas Internas</h1>

      <div className="text-[9.5px] font-extrabold uppercase tracking-wide text-muted mt-3.5 mb-1.5">
        Empresas Operacionais
      </div>
      <div className="flex flex-wrap gap-1.5 mb-1">
        {OPERACIONAIS_TABS.map((t) => (
          <TabChip key={t.id} active={active === t.id} label={t.label} onClick={() => setActive(t.id)} />
        ))}
      </div>

      <div className="text-[9.5px] font-extrabold uppercase tracking-wide text-muted mt-3.5 mb-1.5">
        Empresas Comerciais · Front Office
      </div>
      <div className="flex flex-wrap gap-1.5 mb-1">
        {FRONTOFFICE_TABS.map((t) => (
          <TabChip key={t.id} active={active === t.id} label={t.label} onClick={() => setActive(t.id)} />
        ))}
      </div>

      <div className="text-[9.5px] font-extrabold uppercase tracking-wide text-muted mt-3.5 mb-1.5">
        Empresas Especializadas · Back Office
      </div>
      <div className="flex flex-wrap gap-1.5 mb-1">
        {BACKOFFICE_TABS.map((t) => (
          <TabChip key={t.id} active={active === t.id} label={t.label} onClick={() => setActive(t.id)} />
        ))}
      </div>

      <div className="text-[9.5px] font-extrabold uppercase tracking-wide text-muted mt-3.5 mb-1.5">
        Temáticas (transversais)
      </div>
      <div className="flex flex-wrap gap-1.5 mb-6">
        {THEME_TABS.map((t) => (
          <TabChip key={t.id} active={active === t.id} label={t.label} onClick={() => setActive(t.id)} />
        ))}
      </div>

      {active === "importacao" && (
        <EmptyDocPlaceholder title="FAST Importação" description="Unidade de negócio comercial de desenvolvimento internacional de fornecedores; as importações são executadas pelas operacionais (MaxSteel, DCS/CM e LM/SUPPLY). Aguardando o documento de política interna. Observação: Modelo Embrionário, aguardando consolidação." />
      )}
      {active === "atacado-franqueados" && (
        <EmptyDocPlaceholder title="Atacado para Franqueados" description="Abastecimento comercial das unidades franqueadas (frente B da Diretoria de Leandro). Aguardando o documento de política interna." />
      )}
      {active === "csc" && <CscPolicy />}
      {active === "atacado" && <AtacadoPolicy />}
      {active === "varejo" && (
        <EmptyDocPlaceholder title="FAST Varejo" description="Aguardando o documento de política interna desta empresa." />
      )}
      {active === "obras" && <FastHomesComercialPolicy />}
      {active === "franquias" && (
        <EmptyDocPlaceholder title="FAST Franchising" description="Aguardando o documento de política interna desta empresa." />
      )}
      {active === "supply" && (
        <div className="flex flex-col gap-8">
          <SupplyPolicy />
          <div className="border-t-2 border-dashed border-line pt-8">
            <OperacoesLogisticasPolicy />
          </div>
        </div>
      )}
      {active === "dcs" && <DcsPolicy />}
      {active === "logexpress" && <LogexpressPolicy />}
      {active === "digital" && (
        <EmptyDocPlaceholder title="Comércio Digital" description="Aguardando o documento de política interna desta empresa." />
      )}
      {active === "unity" && <UnityPolicy />}
      {active === "maxsteel" && <MaxsteelPolicy />}
      {active === "engenharia" && <EngenhariaPolicy />}
      {active === "compliance" && <CompliancePolicy />}
      {active === "conflito" && <ConflitoPolicy />}
      {active === "viagens" && <ViagensPolicy />}
    </div>
  )
}

interface PolicyDocMeta {
  codigo: string
  versao: string
  revisao: string
  vigencia: string
  elaboracao: string
  aprovacao: string
  responsavel: string
  classificacao: string
  finalidade: string
  objetivo: string
}

function PolicyDoc({
  meta,
  parts,
  eyebrow,
  title,
  finalidadeLabel,
  intro,
  footer,
}: {
  meta: PolicyDocMeta
  parts: PolicyPart[]
  eyebrow: string
  title: string
  finalidadeLabel: string
  intro: string
  footer: string
}) {
  const m = meta
  return (
    <div>
      <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden mb-5">
        <div className="h-1.5 bg-gradient-to-r from-brand-red to-[#8f1116]" />
        <div className="p-6">
          <div className="flex items-center gap-3.5 mb-1.5">
            <FastLogo height={24} />
            <span className="text-[10px] font-extrabold uppercase tracking-wide text-muted border-l border-line pl-3.5">
              {eyebrow}
            </span>
          </div>
          <h2 className="text-lg font-extrabold text-ink">{title}</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] mt-4 rounded-lg border border-line overflow-hidden text-xs">
            {[
              ["Código", m.codigo],
              ["Versão", m.versao],
              ["Revisão", m.revisao],
              ["Vigência", m.vigencia],
              ["Elaboração", m.elaboracao],
              ["Aprovação", m.aprovacao],
              ["Responsável", m.responsavel],
              ["Classificação", m.classificacao],
            ].map(([label, value], i) => (
              <div key={label} className={cn("px-3 py-2 border-line", i >= 2 && "border-t", "border-l")}>
                <b className="block text-[9.5px] font-extrabold uppercase tracking-wide text-muted mb-0.5">{label}</b>
                {value}
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3.5 border-t border-dashed border-line">
            <b className="block text-sm font-extrabold mb-1">{finalidadeLabel}</b>
            <p className="text-xs text-ink-2 leading-relaxed">{m.finalidade}</p>
          </div>
          <div className="mt-4 pt-3.5 border-t border-dashed border-line">
            <b className="block text-sm font-extrabold mb-1">Objetivo da Política</b>
            <p className="text-xs text-ink-2 leading-relaxed">{m.objetivo}</p>
          </div>
        </div>
      </div>

      <Accordion type="multiple" defaultValue={["item-0"]}>
        {parts.map((part, i) => (
          <AccordionItem key={part.title} value={`item-${i}`}>
            <AccordionTrigger>{part.title}</AccordionTrigger>
            <AccordionContent>
              {part.subsections.map((sub, j) => (
                <div key={j} className={j > 0 ? "mt-3" : ""}>
                  {sub.heading && (
                    <h4 className="text-[11px] font-extrabold uppercase tracking-wide text-muted mb-1">
                      {sub.heading}
                    </h4>
                  )}
                  {sub.paragraphs?.map((p, k) => (
                    <p key={k} className="text-xs text-ink-2 leading-relaxed mb-1.5">
                      {p}
                    </p>
                  ))}
                  {sub.items && (
                    <ul className="list-disc pl-4.5 space-y-1">
                      {sub.items.map((it, k) => (
                        <li key={k} className="text-xs text-ink-2 leading-relaxed">
                          {it}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <SignatureBlock
        intro={intro}
        items={[
          { name: "Nome / cargo", role: "Data: ____/____/______" },
          { name: "Nome / cargo", role: "Data: ____/____/______" },
        ]}
      />

      <footer className="text-center text-[11px] text-muted mt-6">{footer}</footer>
    </div>
  )
}

function CscPolicy() {
  return (
    <PolicyDoc
      meta={CSC_POLICY_META}
      parts={CSC_POLICY_PARTS}
      eyebrow="Comitê de Governança e Compliance"
      title="Política Interna — Centro de Serviços Compartilhados (CSC)"
      finalidadeLabel="Finalidade do CSC"
      intro="Esta Política do CSC foi aprovada pela Diretoria Executiva e homologada pelo Conselho Consultivo do Grupo FAST."
      footer="Grupo FAST · Política do CSC (CSC-POL-001) · Confidencial"
    />
  )
}

function AtacadoPolicy() {
  return (
    <PolicyDoc
      meta={ATACADO_POLICY_META}
      parts={ATACADO_POLICY_PARTS}
      eyebrow="Comercial Atacado"
      title="Política Interna — Comercial Atacado"
      finalidadeLabel="Objetivo"
      intro="Esta Política Interna do Comercial Atacado foi aprovada por Poliana Alves."
      footer="Grupo FAST · Política Interna Comercial Atacado (CMA.PI.001.01) · Confidencial"
    />
  )
}

function FastHomesComercialPolicy() {
  return (
    <PolicyDoc
      meta={FASTHOMES_COMERCIAL_POLICY_META}
      parts={FASTHOMES_COMERCIAL_POLICY_PARTS}
      eyebrow="Comercial · FAST Homes"
      title="Política Comercial e de Vendas — FAST Homes"
      finalidadeLabel="Objetivo"
      intro="Esta Política Comercial e de Vendas foi aprovada por Fábio Furtado (elaboração: Letícia Werneck)."
      footer="Grupo FAST · Política Comercial e de Vendas — FAST Homes (FH.PC.001) · Confidencial"
    />
  )
}

function MaxsteelPolicy() {
  return (
    <PolicyDoc
      meta={MAXSTEEL_POLICY_META}
      parts={MAXSTEEL_POLICY_PARTS}
      eyebrow="Fábrica Nova Metálica"
      title="Política Interna — MaxSteel"
      finalidadeLabel="Objetivo"
      intro="Esta Política Interna da MaxSteel (Nova Metálica) foi aprovada por Thiago Viana e consolida os padrões de segurança, produção e qualidade da fábrica."
      footer="Grupo FAST · Política Interna MaxSteel (Código 01) · Confidencial"
    />
  )
}

function SupplyPolicy() {
  return (
    <PolicyDoc
      meta={SUPPLY_POLICY_META}
      parts={SUPPLY_POLICY_PARTS}
      eyebrow="DCS Supply"
      title="Política Interna — Suprimentos e Compras"
      finalidadeLabel="Objetivo"
      intro="Esta Política Interna de Suprimentos e Compras foi aprovada por Josiel Dias."
      footer="Grupo FAST · Política Interna Suprimentos e Compras (CP.PI.001.01) · Confidencial"
    />
  )
}

function CompliancePolicy() {
  return (
    <PolicyDoc
      meta={COMPLIANCE_POLICY_META}
      parts={COMPLIANCE_POLICY_PARTS}
      eyebrow="Jurídico e Compliance · CSC"
      title="Política de Compliance e Integridade"
      finalidadeLabel="Objetivo e Finalidade"
      intro="Esta Política de Compliance e Integridade entra em vigor na data de sua aprovação pela CEO e pelo Conselho Consultivo do Ecossistema FAST."
      footer="Grupo FAST · Política de Compliance e Integridade (POL-COMP-001 v1.0) · Confidencial"
    />
  )
}

function EngenhariaPolicy() {
  return (
    <PolicyDoc
      meta={ENGENHARIA_POLICY_META}
      parts={ENGENHARIA_POLICY_PARTS}
      eyebrow="Engenharia e Arquitetura · FAST Homes"
      title="Política Geral e Responsabilidades — Engenharia e Arquitetura"
      finalidadeLabel="Objetivo"
      intro="Esta Política Geral e Responsabilidades de Engenharia e Arquitetura foi elaborada por Letícia Werneck, aguardando aprovação."
      footer="Grupo FAST · Política Geral e Responsabilidades — Engenharia e Arquitetura (FH.PI.002.01) · Confidencial"
    />
  )
}

function ConflitoPolicy() {
  return (
    <PolicyDoc
      meta={CONFLITO_POLICY_META}
      parts={CONFLITO_POLICY_PARTS}
      eyebrow="Jurídico e Compliance · CSC"
      title="Política de Conflito de Interesses"
      finalidadeLabel="Objetivo e Finalidade"
      intro="Esta Política de Conflito de Interesses entra em vigor na data de sua aprovação pela CEO e pelo Conselho Consultivo do Ecossistema FAST."
      footer="Grupo FAST · Política de Conflito de Interesses (POL-CONF-001 v1.0) · Confidencial"
    />
  )
}

function ViagensPolicy() {
  return (
    <PolicyDoc
      meta={VIAGENS_POLICY_META}
      parts={VIAGENS_POLICY_PARTS}
      eyebrow="Administrativo CSC · Transversal"
      title="Solicitação de Viagem e Reembolso de Despesas"
      finalidadeLabel="Objetivo"
      intro="Este Procedimento Operacional Padrão de Viagens e Reembolso é aplicável a todas as empresas do Ecossistema FAST."
      footer="Grupo FAST · Solicitação de Viagem e Reembolso de Despesas (ADM.019.01) · Confidencial"
    />
  )
}

function DcsPolicy() {
  return (
    <PolicyDoc
      meta={DCS_POLICY_META}
      parts={DCS_POLICY_PARTS}
      eyebrow="DCS-CM · Casa do Montador"
      title="Política de Abastecimento de Lojas — DCS-CM"
      finalidadeLabel="Objetivo"
      intro="Esta Política de Abastecimento de Lojas foi aprovada por Josiel Dias (elaboração: Letícia Werneck; análise: Bruna Lanceloti e Wellington França)."
      footer="Grupo FAST · Política de Abastecimento de Lojas — DCS-CM (DCS.PO.001) · Confidencial"
    />
  )
}

function UnityPolicy() {
  return (
    <PolicyDoc
      meta={UNITY_POLICY_META}
      parts={UNITY_POLICY_PARTS}
      eyebrow="Unity Company · Marketing"
      title="Política Interna de Marketing"
      finalidadeLabel="Objetivo desta política"
      intro="Esta Política Interna de Marketing da Unity Company deve ser revisada anualmente pela coordenação de Marketing, com validação da gestão."
      footer="Grupo FAST · Política Interna de Marketing — Unity Company (v1.0 · 2025) · Confidencial"
    />
  )
}

function OperacoesLogisticasPolicy() {
  return (
    <PolicyDoc
      meta={OPLOG_POLICY_META}
      parts={OPLOG_POLICY_PARTS}
      eyebrow="Política Geral · Nível Estratégico"
      title="Política de Governança de Operações Logísticas"
      finalidadeLabel="Finalidade"
      intro="Esta Política Geral prevalece sobre POPs e ITs em caso de conflito, sendo administrada pela área de Processos e ratificada pela Gerência de Logística e Auditoria Interna."
      footer="Grupo FAST · Política de Governança de Operações Logísticas (EX.PG.001.01) · Confidencial"
    />
  )
}

function LogexpressPolicy() {
  return (
    <PolicyDoc
      meta={LOGEXPRESS_POLICY_META}
      parts={LOGEXPRESS_POLICY_PARTS}
      eyebrow="Logexpress · Transporte e Logística"
      title="Política Interna — Logexpress"
      finalidadeLabel="Objetivo"
      intro="Esta Política Interna da Logexpress foi aprovada por Márcio Machado (elaboração: Ariene Santos)."
      footer="Grupo FAST · Política Interna Logexpress (LOG.PI.005.01) · Confidencial"
    />
  )
}
