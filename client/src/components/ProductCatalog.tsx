import { ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Hoodie Black & Yellow",
    price: 89.90,
    originalPrice: 149.90,
    image: "/manus-storage/hoodie-black-yellow_59820b37.png",
    category: "Hoodies",
    rating: 4.8,
    reviews: 24,
    badge: "-40%",
  },
  {
    id: "2",
    name: "T-Shirt Purple Graphic",
    price: 49.90,
    originalPrice: 89.90,
    image: "/manus-storage/tshirt-purple-graphic_69170059.png",
    category: "Camisetas",
    rating: 4.9,
    reviews: 18,
    badge: "-45%",
  },
  {
    id: "3",
    name: "Cargo Pants Khaki",
    price: 129.90,
    originalPrice: 199.90,
    image: "/manus-storage/cargo-pants-khaki_0c3e11cd.png",
    category: "Calças",
    rating: 4.7,
    reviews: 31,
    badge: "-35%",
  },
  {
    id: "4",
    name: "Bomber Jacket Navy",
    price: 159.90,
    originalPrice: 279.90,
    image: "/manus-storage/bomber-jacket-navy_01e34b42.png",
    category: "Jaquetas",
    rating: 4.9,
    reviews: 42,
    badge: "-43%",
  },
  {
    id: "5",
    name: "Cap Black Embroidered",
    price: 39.90,
    originalPrice: 69.90,
    image: "/manus-storage/cap-black-embroidered_1a92866d.png",
    category: "Acessórios",
    rating: 4.6,
    reviews: 15,
    badge: "-43%",
  },
  {
    id: "6",
    name: "Sneakers White & Black",
    price: 199.90,
    originalPrice: 349.90,
    image: "/manus-storage/sneakers-white-black_c96dbabe.png",
    category: "Calçados",
    rating: 4.8,
    reviews: 56,
    badge: "-43%",
  },
];

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const discount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <section className="section-dark bg-secondary/10">
      <div className="container">
        <div className="mb-12">
          <div className="badge-capsule mb-4">Catálogo</div>
          <h2 className="heading-display text-accent mb-8">Coleção Streetwear</h2>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
              selectedCategory === null
                ? "bg-accent text-accent-foreground"
                : "bg-card text-foreground border border-border hover:border-accent"
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-accent text-accent-foreground"
                  : "bg-card text-foreground border border-border hover:border-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="section-card group relative overflow-hidden"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Badge de Desconto */}
              {product.badge && (
                <div className="absolute top-3 right-3 z-10 bg-red-500 text-white font-bold px-3 py-1 rounded-full text-sm">
                  {product.badge}
                </div>
              )}

              {/* Imagem do Produto */}
              <div className="relative h-64 mb-4 bg-background rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Informações do Produto */}
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-accent font-semibold mb-1 uppercase">
                    {product.category}
                  </p>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-accent text-accent"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-foreground/60">
                    ({product.reviews})
                  </span>
                </div>

                {/* Preço */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-accent">
                    R$ {product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-foreground/50 line-through">
                    R$ {product.originalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Botão de Compra */}
                <Button
                  className={`w-full btn-primary transition-all duration-300 ${
                    hoveredProduct === product.id ? "opacity-100" : "opacity-90"
                  }`}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA para Ver Mais */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10 px-8 py-3"
          >
            Ver Mais Produtos
          </Button>
        </div>
      </div>
    </section>
  );
}
