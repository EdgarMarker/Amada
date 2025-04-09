import React, { useState } from "react";
const dataLotesTest: Lote[] = [
  {
    id: "lotes-1",
    nombre: "Lote 1",
    area: 100,
    precio: 100000,
    estado: "disponible"
  },
  {
    id: "lotes-2",
    nombre: "Lote 2",
    area: 150,
    precio: 150000,
    estado: "reservado"
  },
  {
    id: "lotes-3",
    nombre: "Lote 3",
    area: 200,
    precio: 200000,
    estado: "vendido"
  },
  {
    id: "lotes-4",
    nombre: "Lote 4",
    area: 120,
    precio: 120000,
    estado: "disponible"
  },
  {
    id: "lotes-5",
    nombre: "Lote 5",
    area: 130,
    precio: 130000,
    estado: "reservado"
  },
  {
    id: "lotes-6",
    nombre: "Lote 6",
    area: 140,
    precio: 140000,
    estado: "vendido"
  },
  {
    id: "lotes-7",
    nombre: "Lote 7",
    area: 160,
    precio: 160000,
    estado: "disponible"
  },
  {
    id: "lotes-8",
    nombre: "Lote 8",
    area: 170,
    precio: 170000,
    estado: "reservado"
  },
  {
    id: "lotes-9",
    nombre: "Lote 9",
    area: 180,
    precio: 180000,
    estado: "vendido"
  }
];
interface Lote {
  id: string;
  nombre: string;
  area: number;
  precio: number;
  estado: "disponible" | "reservado" | "vendido";
}

interface MasterplanProps {
  dataLotes?: Lote[]; 
}

interface LoteStyle {
  fill: string;
  stroke: string;
  strokeWidth: string;
}

const Masterplan: React.FC<MasterplanProps> = ({ 
  dataLotes = [] 
}: MasterplanProps) => {
  const [selectedLote, setSelectedLote] = useState<Lote | null>(null);

  const getLoteStyle = (lote: Lote): LoteStyle => {
    switch (lote.estado) {
      case "vendido":
        return {
          fill: "#F44336",
          stroke: "#B71C1C",
          strokeWidth: "2"
        };
      case "reservado":
        return {
          fill: "#FFC107",
          stroke: "#FF6F00",
          strokeWidth: "2"
        };
      case "disponible":
      default:
        return {
          fill: "#2196F3",
          stroke: "#0D47A1",
          strokeWidth: "2"
        };
    }
  };

  const handleLoteClick = (loteId: string) => {
    // Busca el lote seleccionado en el array de lotes
    const loteFinded = dataLotesTest.find(lote => lote.id === loteId);
    setSelectedLote(loteFinded || null);
  };

  // Creando paths de manera predecible
  const createLotePath = (loteId: string, pathD: string, lote?: Lote) => {
    const stylePath = lote ? getLoteStyle(lote) : { fill: "#CCCCCC", stroke: "#999999", strokeWidth: "2" };
    
    return (
      <path
        id={loteId}
        key={loteId}
        d={pathD}
        fill={stylePath.fill}
        stroke={stylePath.stroke}
        strokeWidth={stylePath.strokeWidth}
        onClick={() => handleLoteClick(loteId)}
        style={{ cursor: 'pointer' }}
      />
    );
  };

  const lotesGeometry = [
    { id: "lotes-1", d: "M50,50 H130 V130 H50 Z" },
    { id: "lotes-2", d: "M150,50 H230 V130 H150 Z" },
    { id: "lotes-3", d: "M250,50 H330 V130 H250 Z" },
    { id: "lotes-4", d: "M50,150 H130 V230 H50 Z" },
    { id: "lotes-5", d: "M150,150 H230 V230 H150 Z" },
    { id: "lotes-6", d: "M250,150 H330 V230 H250 Z" },
    { id: "lotes-7", d: "M50,250 H130 V330 H50 Z" },
    { id: "lotes-8", d: "M150,250 H230 V330 H150 Z" },
    { id: "lotes-9", d: "M250,250 H330 V330 H250 Z" }
  ];

  return (
    <div className="masterplan-container">
      <svg
        style={{ width: "400", aspectRatio: "16/9" }}
      >
        {lotesGeometry.map(loteGeom => {
          const loteData = dataLotesTest.find(lote => lote.id === loteGeom.id);
          return createLotePath(loteGeom.id, loteGeom.d, loteData);
        })}
      </svg>
      
      {/* Panel de información del lote seleccionado */}
      <div className="lote-info-panel">
        {selectedLote ? (
          <div className="lote-details" style={{color: "black"}}>
            <h3>{selectedLote.nombre}</h3>
            <p><strong>Área:</strong> {selectedLote.area} m²</p>
            <p><strong>Precio:</strong> ${selectedLote.precio.toLocaleString()}</p>
            <p><strong>Estado:</strong> {selectedLote.estado}</p>
          </div>
        ) : (
          <p>Selecciona un lote para ver información</p>
        )}
      </div>
    </div>
  );
};

export default Masterplan;