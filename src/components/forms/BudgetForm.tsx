"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { services } from "@/data/services";
import { useBudgetStore } from "@/store/budget-store";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Sparkles,
  Plus,
  Trash2,
  MessageCircle,
  UserRound,
  ClipboardList,
  Ruler,
  Wrench,
} from "lucide-react";
import { BudgetRequest } from "@/types/budget";

const budgetFormSchema = z.object({
  clientName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  clientEmail: z.string().email("Debe ser un correo electrónico válido"),
  clientPhone: z.string().min(6, "El teléfono debe ser válido"),
  companyName: z.string().optional(),
  serviceSlug: z.string().min(1, "Selecciona un servicio"),
  projectDescription: z
    .string()
    .min(10, "Cuéntanos un poco más de tu proyecto (mínimo 10 caracteres)"),
  location: z.enum(["Interior", "Exterior"]),
  width: z.number().optional().or(z.literal(NaN)),
  height: z.number().optional().or(z.literal(NaN)),
  depth: z.number().optional().or(z.literal(NaN)),
  installationRequired: z.boolean(),
  estimatedBudgetLevel: z
    .enum(["Económico", "Medio", "Alto", "Premium"])
    .optional(),
});

type BudgetFormData = z.infer<typeof budgetFormSchema>;

interface BudgetFormProps {
  initialServiceSlug?: string;
}

const fieldClass =
  "w-full h-[52px] rounded-xl border border-border bg-[#FAF8F5] px-4 text-sm text-foreground placeholder:text-muted-foreground/45 outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(168,90,61,0.10)]";

const smallFieldClass =
  "w-full h-[48px] rounded-xl border border-border bg-[#FAF8F5] px-3 text-sm text-foreground placeholder:text-muted-foreground/45 outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(168,90,61,0.10)]";

const labelClass =
  "text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted-foreground";

const sectionTitleClass =
  "mb-5 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary";

export default function BudgetForm({
  initialServiceSlug = "",
}: BudgetFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [materials, setMaterials] = useState<string[]>([]);
  const [currentMaterial, setCurrentMaterial] = useState("");
  const [savedRequest, setSavedRequest] = useState<BudgetRequest | null>(null);

  const addBudgetRequest = useBudgetStore((state) => state.addBudgetRequest);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<BudgetFormData>({
    resolver: zodResolver(budgetFormSchema),
    defaultValues: {
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      companyName: "",
      serviceSlug: initialServiceSlug,
      projectDescription: "",
      installationRequired: true,
      location: "Exterior",
      estimatedBudgetLevel: "Medio",
    },
  });

  const selectedLocation = watch("location");

  const onSubmit = async (data: BudgetFormData) => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    const request = addBudgetRequest({
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      clientPhone: data.clientPhone,
      companyName: data.companyName,
      serviceSlug: data.serviceSlug,
      projectDescription: data.projectDescription,
      location: data.location,
      dimensions: {
        width:
          typeof data.width === "number" && !isNaN(data.width)
            ? data.width
            : undefined,
        height:
          typeof data.height === "number" && !isNaN(data.height)
            ? data.height
            : undefined,
        depth:
          typeof data.depth === "number" && !isNaN(data.depth)
            ? data.depth
            : undefined,
      },
      installationRequired: data.installationRequired,
      estimatedBudgetLevel: data.estimatedBudgetLevel,
      preferredMaterials: materials,
    });

    setSavedRequest(request);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleAddMaterial = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentMaterial.trim() && !materials.includes(currentMaterial.trim())) {
      setMaterials([...materials, currentMaterial.trim()]);
      setCurrentMaterial("");
    }
  };

  const handleRemoveMaterial = (index: number) => {
    setMaterials(materials.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    reset();
    setMaterials([]);
    setIsSubmitted(false);
    setSavedRequest(null);
  };

  const getWhatsAppLink = () => {
    if (!savedRequest) return "#";

    const phone = "5491136458921";
    const serviceName =
      services.find((s) => s.slug === savedRequest.serviceSlug)?.name ||
      savedRequest.serviceSlug;

    let msg = `*Hola Vektor Visual!*\n`;
    msg += `Me gustaría solicitar un presupuesto técnico para: *${serviceName}*.\n\n`;
    msg += `*Contacto:*\n`;
    msg += `- *Nombre:* ${savedRequest.clientName}\n`;
    msg += `- *Teléfono:* ${savedRequest.clientPhone}\n`;
    msg += `- *Email:* ${savedRequest.clientEmail}\n`;

    if (savedRequest.companyName) {
      msg += `- *Empresa:* ${savedRequest.companyName}\n`;
    }

    msg += `\n*Detalles del proyecto:*\n`;
    msg += `- *Ubicación:* ${savedRequest.location}\n`;
    msg += `- *Instalación requerida:* ${
      savedRequest.installationRequired ? "Sí" : "No"
    }\n`;

    if (savedRequest.estimatedBudgetLevel) {
      msg += `- *Presupuesto estimado:* ${savedRequest.estimatedBudgetLevel}\n`;
    }

    const dims = savedRequest.dimensions;

    if (dims && (dims.width || dims.height || dims.depth)) {
      const parts = [];

      if (dims.width) parts.push(`${dims.width}cm (Ancho)`);
      if (dims.height) parts.push(`${dims.height}cm (Alto)`);
      if (dims.depth) parts.push(`${dims.depth}cm (Espesor)`);

      msg += `- *Medidas:* ${parts.join(" x ")}\n`;
    }

    if (
      savedRequest.preferredMaterials &&
      savedRequest.preferredMaterials.length > 0
    ) {
      msg += `- *Materiales:* ${savedRequest.preferredMaterials.join(", ")}\n`;
    }

    msg += `\n*Descripción:* ${savedRequest.projectDescription}\n`;
    msg += `\n_Solicitud N°: ${savedRequest.id}_`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  if (isSubmitted && savedRequest) {
    return (
      <div className="relative overflow-hidden rounded-[28px] border border-primary/25 bg-white/85 p-8 text-center shadow-[0_24px_70px_rgba(17,17,17,0.08)] backdrop-blur-md animate-in fade-in duration-300">
        <div className="absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative space-y-6">
          <div className="flex justify-center">
            <div className="rounded-full border border-primary/20 bg-primary/10 p-4 text-primary">
              <CheckCircle2 className="size-16" />
            </div>
          </div>

          <div className="space-y-2">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-primary">
              Solicitud registrada
            </span>

            <h3 className="text-2xl font-extrabold text-foreground">
              ¡Solicitud recibida!
            </h3>

            <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
              Hemos registrado tu solicitud de presupuesto técnico. Un asesor de
              <span className="font-semibold text-primary">
                {" "}
                Vektor Visual
              </span>{" "}
              se pondrá en contacto contigo en las próximas 24 horas hábiles.
            </p>

            <div className="mt-4 inline-block rounded-xl border border-border bg-secondary/45 px-4 py-3 text-xs">
              <span className="font-bold text-foreground">
                Código de solicitud:
              </span>{" "}
              {savedRequest.id}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#20ba5a]"
            >
              <MessageCircle className="size-5" />
              Enviar copia por WhatsApp
            </a>

            <button
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-secondary/80"
            >
              Nueva solicitud
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[28px] border border-[rgba(214,205,194,0.85)] bg-white/85 p-6 shadow-[0_24px_70px_rgba(17,17,17,0.08)] backdrop-blur-md sm:p-10"
    >
      {/* Header */}
      <div className="mb-8 flex items-start gap-4 border-b border-border/80 pb-7">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
          <Sparkles className="size-6" />
        </div>

        <div>
          <h3 className="text-xl font-extrabold tracking-tight text-foreground">
            Formulario de Presupuesto Industrial
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Completá los detalles de tu proyecto y recibí una cotización
            estimativa con render digital sin cargo.
          </p>
        </div>
      </div>

      <div className="space-y-9">
        {/* 01 - Datos de contacto */}
        <section>
          <div className={sectionTitleClass}>
            <UserRound className="size-4" />
            <span>01 — Datos de contacto</span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="clientName" className={labelClass}>
                Nombre y apellido <span className="text-primary">*</span>
              </label>

              <input
                id="clientName"
                type="text"
                {...register("clientName")}
                placeholder="Ej: Juan Pérez"
                className={fieldClass}
              />

              {errors.clientName && (
                <p className="mt-1 text-[11px] text-red-500">
                  {errors.clientName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="clientEmail" className={labelClass}>
                Email comercial <span className="text-primary">*</span>
              </label>

              <input
                id="clientEmail"
                type="email"
                {...register("clientEmail")}
                placeholder="Ej: jperez@empresa.com"
                className={fieldClass}
              />

              {errors.clientEmail && (
                <p className="mt-1 text-[11px] text-red-500">
                  {errors.clientEmail.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="clientPhone" className={labelClass}>
                Teléfono de contacto <span className="text-primary">*</span>
              </label>

              <input
                id="clientPhone"
                type="tel"
                {...register("clientPhone")}
                placeholder="Ej: +54 9 11 2345 6789"
                className={fieldClass}
              />

              {errors.clientPhone && (
                <p className="mt-1 text-[11px] text-red-500">
                  {errors.clientPhone.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="companyName" className={labelClass}>
                Empresa / local
                <span className="ml-1 text-muted-foreground/70">
                  (opcional)
                </span>
              </label>

              <input
                id="companyName"
                type="text"
                {...register("companyName")}
                placeholder="Ej: Café Martínez Sucursal Palermo"
                className={fieldClass}
              />
            </div>
          </div>
        </section>

        <div className="h-px bg-border/80" />

        {/* 02 - Detalles del proyecto */}
        <section>
          <div className={sectionTitleClass}>
            <ClipboardList className="size-4" />
            <span>02 — Detalles del proyecto</span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="serviceSlug" className={labelClass}>
                Servicio a cotizar <span className="text-primary">*</span>
              </label>

              <select
                id="serviceSlug"
                {...register("serviceSlug")}
                className={fieldClass}
              >
                <option value="" className="bg-card text-foreground">
                  Seleccioná un tipo de cartel
                </option>

                {services.map((service) => (
                  <option
                    key={service.slug}
                    value={service.slug}
                    className="bg-card text-foreground"
                  >
                    {service.name}
                  </option>
                ))}
              </select>

              {errors.serviceSlug && (
                <p className="mt-1 text-[11px] text-red-500">
                  {errors.serviceSlug.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <span id="location-label" className={`${labelClass} block`}>
                Ubicación del cartel <span className="text-primary">*</span>
              </span>

              <div
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                role="group"
                aria-labelledby="location-label"
              >
                <label
                  className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-all ${
                    selectedLocation === "Exterior"
                      ? "border-primary bg-primary/10 shadow-[0_0_0_3px_rgba(168,90,61,0.08)]"
                      : "border-border bg-[#FAF8F5] hover:border-primary/40"
                  }`}
                >
                  <input
                    type="radio"
                    value="Exterior"
                    {...register("location")}
                    className="mt-1 size-4 accent-primary"
                  />

                  <span>
                    <span className="block text-sm font-extrabold text-foreground">
                      Exterior
                    </span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      Marquesinas y fachadas
                    </span>
                  </span>
                </label>

                <label
                  className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-all ${
                    selectedLocation === "Interior"
                      ? "border-primary bg-primary/10 shadow-[0_0_0_3px_rgba(168,90,61,0.08)]"
                      : "border-border bg-[#FAF8F5] hover:border-primary/40"
                  }`}
                >
                  <input
                    type="radio"
                    value="Interior"
                    {...register("location")}
                    className="mt-1 size-4 accent-primary"
                  />

                  <span>
                    <span className="block text-sm font-extrabold text-foreground">
                      Interior
                    </span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      Recepción y showroom
                    </span>
                  </span>
                </label>
              </div>

              {errors.location && (
                <p className="mt-1 text-[11px] text-red-500">
                  {errors.location.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <label htmlFor="projectDescription" className={labelClass}>
              Descripción del proyecto y requerimientos{" "}
              <span className="text-primary">*</span>
            </label>

            <textarea
              id="projectDescription"
              rows={5}
              {...register("projectDescription")}
              placeholder="Escribí detalles del cartel. Ejemplo: letras corpóreas retroiluminadas con luz cálida de 3000K sobre fondo de concreto. Queremos que diga 'NEXUS' en acero inoxidable..."
              className="min-h-[130px] w-full resize-y rounded-2xl border border-border bg-[#FAF8F5] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/45 outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(168,90,61,0.10)]"
            />

            {errors.projectDescription && (
              <p className="mt-1 text-[11px] text-red-500">
                {errors.projectDescription.message}
              </p>
            )}
          </div>
        </section>

        <div className="h-px bg-border/80" />

        {/* 03 - Medidas e inversión */}
        <section>
          <div className={sectionTitleClass}>
            <Ruler className="size-4" />
            <span>03 — Medidas e inversión</span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-2 md:col-span-2">
              <span id="dimensions-label" className={`${labelClass} block`}>
                Medidas estimadas
                <span className="ml-1 text-muted-foreground/70">
                  (en centímetros)
                </span>
              </span>

              <div
                className="grid grid-cols-1 gap-3 sm:grid-cols-3"
                role="group"
                aria-labelledby="dimensions-label"
              >
                <div>
                  <input
                    id="width"
                    type="number"
                    {...register("width", { valueAsNumber: true })}
                    placeholder="Ancho"
                    aria-label="Ancho en centímetros"
                    className={smallFieldClass}
                  />
                  <label
                    htmlFor="width"
                    className="mt-1 block cursor-pointer text-[10px] text-muted-foreground"
                  >
                    Ancho en cm
                  </label>
                </div>

                <div>
                  <input
                    id="height"
                    type="number"
                    {...register("height", { valueAsNumber: true })}
                    placeholder="Alto"
                    aria-label="Alto en centímetros"
                    className={smallFieldClass}
                  />
                  <label
                    htmlFor="height"
                    className="mt-1 block cursor-pointer text-[10px] text-muted-foreground"
                  >
                    Alto en cm
                  </label>
                </div>

                <div>
                  <input
                    id="depth"
                    type="number"
                    {...register("depth", { valueAsNumber: true })}
                    placeholder="Espesor"
                    aria-label="Profundidad o espesor en centímetros"
                    className={smallFieldClass}
                  />
                  <label
                    htmlFor="depth"
                    className="mt-1 block cursor-pointer text-[10px] text-muted-foreground"
                  >
                    Espesor en cm
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="estimatedBudgetLevel" className={labelClass}>
                Rango de inversión
              </label>

              <select
                id="estimatedBudgetLevel"
                {...register("estimatedBudgetLevel")}
                className={fieldClass}
              >
                <option value="Económico" className="bg-card text-foreground">
                  Económico
                </option>
                <option value="Medio" className="bg-card text-foreground">
                  Medio recomendado
                </option>
                <option value="Alto" className="bg-card text-foreground">
                  Alto
                </option>
                <option value="Premium" className="bg-card text-foreground">
                  Premium / Corporativo
                </option>
              </select>
            </div>
          </div>
        </section>

        <div className="h-px bg-border/80" />

        {/* 04 - Materiales e instalación */}
        <section>
          <div className={sectionTitleClass}>
            <Wrench className="size-4" />
            <span>04 — Materiales e instalación</span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="currentMaterial" className={labelClass}>
                Materiales de interés
                <span className="ml-1 text-muted-foreground/70">
                  (opcional)
                </span>
              </label>

              <div className="flex gap-2">
                <input
                  id="currentMaterial"
                  type="text"
                  value={currentMaterial}
                  onChange={(e) => setCurrentMaterial(e.target.value)}
                  placeholder="Ej: Acero inoxidable, Neón LED..."
                  className="h-[52px] flex-grow rounded-xl border border-border bg-[#FAF8F5] px-4 text-sm text-foreground placeholder:text-muted-foreground/45 outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(168,90,61,0.10)]"
                />

                <button
                  type="button"
                  onClick={handleAddMaterial}
                  aria-label="Agregar material"
                  className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Plus className="size-5" />
                </button>
              </div>

              {materials.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {materials.map((m, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-bold text-foreground"
                    >
                      {m}

                      <button
                        type="button"
                        onClick={() => handleRemoveMaterial(idx)}
                        aria-label={`Quitar ${m}`}
                        className="ml-1 text-muted-foreground transition-colors hover:text-red-500"
                      >
                        <Trash2 className="size-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="self-start rounded-2xl border border-border bg-secondary/50 p-5">
              <label
                htmlFor="installationRequired"
                className="flex cursor-pointer items-start gap-3"
              >
                <input
                  type="checkbox"
                  id="installationRequired"
                  {...register("installationRequired")}
                  className="mt-0.5 size-5 cursor-pointer rounded accent-primary"
                />

                <span>
                  <span className="block text-xs font-extrabold uppercase tracking-[0.12em] text-foreground">
                    Requiere instalación en altura
                  </span>

                  <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                    Seleccioná si precisás montaje por nuestro equipo técnico
                    con seguro ART.
                  </span>
                </span>
              </label>
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <div className="border-t border-border/80 pt-7">
          <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs leading-relaxed text-muted-foreground sm:max-w-xs">
              Te responderemos dentro de las próximas 12 horas hábiles con una
              orientación técnica inicial.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-[54px] items-center justify-center gap-2 rounded-xl bg-primary px-8 text-xs font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_14px_32px_rgba(116,58,40,0.22)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#743A28] hover:shadow-[0_18px_38px_rgba(116,58,40,0.28)] active:scale-95 disabled:pointer-events-none disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <span>Procesando...</span>
                  <Loader2 className="size-4 animate-spin" />
                </>
              ) : (
                <>
                  <span>Solicitar cotización estimativa</span>
                  <ArrowRight className="size-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
