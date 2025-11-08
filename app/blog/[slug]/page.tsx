import { notFound } from "next/navigation";
import Link from "next/link";

const blogPosts = {
  "gsm-uniform-fabric": {
    title: "Why GSM Matters in School Uniforms",
    date: "November 1, 2025",
    readTime: "5 min read",
    category: "Fabric Guide",
    content: `
      <p class="text-text-secondary mb-4">When selecting school uniforms, one of the most important yet overlooked factors is GSM (Grams per Square Meter). This measurement determines the weight and quality of the fabric, directly impacting durability, comfort, and appearance.</p>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">What is GSM?</h2>
      <p class="text-text-secondary mb-4">GSM refers to the weight of fabric measured in grams per square meter. Higher GSM typically means:</p>
      <ul class="list-disc list-inside text-text-secondary mb-6 space-y-1">
        <li>Thicker, more durable fabric</li>
        <li>Better opacity and coverage</li>
        <li>Enhanced longevity</li>
        <li>Superior appearance retention</li>
      </ul>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">Recommended GSM for School Uniforms</h2>
      <div class="bg-surface rounded-lg p-4 mb-6">
        <ul class="space-y-2 text-text-primary">
          <li><strong>T-shirts:</strong> 160-180 GSM (lightweight, breathable)</li>
          <li><strong>Polo shirts:</strong> 180-200 GSM (structured, professional)</li>
          <li><strong>Trousers/Skirts:</strong> 200-250 GSM (durable, shape-retaining)</li>
          <li><strong>Blazers:</strong> 250-300 GSM (formal, structured)</li>
        </ul>
      </div>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">Why We Use Premium GSM Fabrics</h2>
      <p class="text-text-secondary mb-4">At Layered Luxe, we work with Mafatlal and Mayur fabrics that meet optimal GSM requirements:</p>
      <ul class="list-disc list-inside text-text-secondary mb-6 space-y-1">
        <li>Better wash-resistance and color retention</li>
        <li>Professional appearance that lasts</li>
        <li>Comfortable wear throughout the school day</li>
        <li>Cost-effective in the long run</li>
      </ul>

      <p class="text-text-secondary">Investing in proper GSM ensures your school uniforms maintain their appearance and functionality throughout the academic year.</p>
    `,
  },
  "school-tracksuit-guide": {
    title: "5 Things to Check When Choosing School Tracksuits",
    date: "October 28, 2025",
    readTime: "4 min read",
    category: "Buying Guide",
    content: `
      <p class="text-text-secondary mb-4">School tracksuits serve multiple purposes - from physical education to sports team representation. Here are five essential factors to consider when selecting tracksuits for your institution.</p>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">1. Fabric Performance</h2>
      <p class="text-text-secondary mb-4">Look for moisture-wicking, breathable fabrics that allow students to stay comfortable during physical activities. Our performance fabrics with 140-180 GSM provide the perfect balance of durability and breathability.</p>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">2. Fit and Comfort</h2>
      <p class="text-text-secondary mb-4">Tracksuits should allow free movement without being too loose or restrictive. Consider:</p>
      <ul class="list-disc list-inside text-text-secondary mb-6 space-y-1">
        <li>Elastic waistbands with drawstrings</li>
        <li>Appropriate sleeve and leg lengths</li>
        <li>Comfortable shoulder and armpit areas</li>
      </ul>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">3. Durability Features</h2>
      <p class="text-text-secondary mb-4">School tracksuits face heavy use. Ensure they include:</p>
      <ul class="list-disc list-inside text-text-secondary mb-6 space-y-1">
        <li>Reinforced stitching at stress points</li>
        <li>Quality zippers that won't break</li>
        <li>Color-fast materials that resist fading</li>
      </ul>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">4. Customization Options</h2>
      <p class="text-text-secondary mb-4">Your tracksuit should represent your school identity:</p>
      <ul class="list-disc list-inside text-text-secondary mb-6 space-y-1">
        <li>School logo placement (embroidery preferred)</li>
        <li>School colors and combinations</li>
        <li>Name/number customization if needed</li>
      </ul>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">5. Maintenance Requirements</h2>
      <p class="text-text-secondary mb-4">Consider practical aspects:</p>
      <ul class="list-disc list-inside text-text-secondary mb-6 space-y-1">
        <li>Easy washing and drying</li>
        <li>Minimal ironing requirements</li>
        <li>Stain resistance</li>
      </ul>

      <p class="text-text-secondary">At Layered Luxe, our tracksuits are designed to meet all these criteria, ensuring your students get the best performance and value.</p>
    `,
  },
  "corporate-uniform-branding": {
    title: "How Corporate Uniforms Reinforce Brand Identity",
    date: "October 25, 2025",
    readTime: "6 min read",
    category: "Corporate",
    content: `
      <p class="text-text-secondary mb-4">Corporate uniforms are more than just clothing - they're powerful branding tools that can significantly impact your company's image, employee morale, and customer perception.</p>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">Case Study: Tech Corp India</h2>
      <p class="text-text-secondary mb-4">When Tech Corp India approached us for their corporate uniform program, they wanted to modernize their image while maintaining professionalism. Here's how we helped:</p>

      <div class="bg-surface rounded-lg p-4 mb-6">
        <h3 class="font-semibold text-text-primary mb-2">Challenge:</h3>
        <p class="text-text-secondary mb-4">200+ employees across multiple departments needed uniforms that would:</p>
        <ul class="list-disc list-inside text-text-secondary space-y-1">
          <li>Reflect their innovative, tech-forward brand</li>
          <li>Maintain professional appearance in client meetings</li>
          <li>Be comfortable for long work hours</li>
          <li>Include seasonal variations</li>
        </ul>
      </div>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">Our Solution</h2>
      <p class="text-text-secondary mb-4">We designed a comprehensive uniform program:</p>
      <ul class="list-disc list-inside text-text-secondary mb-6 space-y-1">
        <li><strong>Polo shirts:</strong> Premium cotton-poly blend in company colors</li>
        <li><strong>Blazers:</strong> Modern cut for client-facing roles</li>
        <li><strong>Casual options:</strong> Branded T-shirts for relaxed days</li>
        <li><strong>Accessories:</strong> Matching ties and pocket squares</li>
      </ul>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">Results Achieved</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-surface rounded-lg p-4">
          <h3 class="font-semibold text-text-primary mb-2">Brand Recognition</h3>
          <p class="text-text-secondary text-sm">40% increase in brand recall at industry events</p>
        </div>
        <div class="bg-surface rounded-lg p-4">
          <h3 class="font-semibold text-text-primary mb-2">Employee Satisfaction</h3>
          <p class="text-text-secondary text-sm">95% positive feedback on comfort and appearance</p>
        </div>
        <div class="bg-surface rounded-lg p-4">
          <h3 class="font-semibold text-text-primary mb-2">Professional Image</h3>
          <p class="text-text-secondary text-sm">Improved client confidence and trust</p>
        </div>
        <div class="bg-surface rounded-lg p-4">
          <h3 class="font-semibold text-text-primary mb-2">Team Unity</h3>
          <p class="text-text-secondary text-sm">Enhanced sense of belonging and identity</p>
        </div>
      </div>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">Key Takeaways</h2>
      <p class="text-text-secondary mb-4">Successful corporate uniform programs should:</p>
      <ul class="list-disc list-inside text-text-secondary mb-6 space-y-1">
        <li>Align with company values and brand personality</li>
        <li>Consider employee comfort and preferences</li>
        <li>Include options for different roles and seasons</li>
        <li>Use quality materials that maintain appearance</li>
        <li>Include proper branding elements</li>
      </ul>

      <p class="text-text-secondary">Ready to transform your company's image with professional uniforms? Contact us to discuss your requirements.</p>
    `,
  },
  "uniform-care-tips": {
    title: "Caring for Your Uniforms: Washing & Storage Tips",
    date: "October 20, 2025",
    readTime: "3 min read",
    category: "Care Guide",
    content: `
      <p class="text-text-secondary mb-4">Proper care extends the life of your uniforms and keeps them looking professional. Follow these expert tips to maintain your uniforms in top condition.</p>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">Washing Guidelines</h2>
      
      <h3 class="text-lg font-medium text-text-primary mt-6 mb-3">Before Washing</h3>
      <ul class="list-disc list-inside text-text-secondary mb-4 space-y-1">
        <li>Check pockets for items</li>
        <li>Close all zippers and fasten buttons</li>
        <li>Turn garments inside out to protect prints/embroidery</li>
        <li>Separate colors and fabric types</li>
      </ul>

      <h3 class="text-lg font-medium text-text-primary mt-6 mb-3">Water Temperature</h3>
      <div class="bg-surface rounded-lg p-4 mb-4">
        <ul class="space-y-2 text-text-primary">
          <li><strong>Cotton blends:</strong> Warm water (30-40°C)</li>
          <li><strong>Polyester:</strong> Cold water (below 30°C)</li>
          <li><strong>Delicate fabrics:</strong> Cold water only</li>
          <li><strong>Whites:</strong> Warm water for better cleaning</li>
        </ul>
      </div>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">Drying Best Practices</h2>
      <ul class="list-disc list-inside text-text-secondary mb-6 space-y-1">
        <li><strong>Air dry when possible:</strong> Protects fabric fibers</li>
        <li><strong>Avoid direct sunlight:</strong> Prevents fading</li>
        <li><strong>Use hangers:</strong> Maintains shape and reduces wrinkles</li>
        <li><strong>Machine drying:</strong> Use low heat settings</li>
      </ul>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">Storage Tips</h2>
      <ul class="list-disc list-inside text-text-secondary mb-6 space-y-1">
        <li>Clean uniforms before storage</li>
        <li>Use padded hangers for blazers and shirts</li>
        <li>Fold T-shirts and casual wear</li>
        <li>Store in breathable garment bags</li>
        <li>Keep in cool, dry places</li>
      </ul>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">Stain Removal</h2>
      <div class="bg-surface rounded-lg p-4 mb-6">
        <p class="text-text-primary mb-2"><strong>Quick action is key:</strong></p>
        <ul class="list-disc list-inside text-text-secondary space-y-1">
          <li>Blot (don't rub) fresh stains</li>
          <li>Use cold water for blood and sweat stains</li>
          <li>Pre-treat with mild detergent</li>
          <li>Test cleaning products on hidden areas first</li>
        </ul>
      </div>

      <h2 class="text-xl font-semibold text-text-primary mt-8 mb-4">When to Replace</h2>
      <p class="text-text-secondary mb-4">Look for these signs that indicate it's time for new uniforms:</p>
      <ul class="list-disc list-inside text-text-secondary mb-6 space-y-1">
        <li>Persistent stains that won't come out</li>
        <li>Fading that affects professional appearance</li>
        <li>Fabric thinning or holes</li>
        <li>Loss of shape or fit</li>
        <li>Worn-out logos or embroidery</li>
      </ul>

      <p class="text-text-secondary">Following these care instructions will help your Layered Luxe uniforms maintain their quality and appearance for years to come.</p>
    `,
  },
};

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Navigation */}
        <nav className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-accent hover:text-primary transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blog
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              {post.category}
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold text-primary mb-6 sm:text-5xl">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-sm text-text-secondary">
            <time className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {post.date}
            </time>
            <span className="text-gray-300">•</span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Article Content */}
        <div className="bg-surface rounded-2xl shadow-sm p-8 lg:p-12">
          <article
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-text-primary prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:text-primary prose-strong:text-text-primary prose-li:text-text-secondary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-12">
          <div className="bg-linear-to-r from-accent via-accent to-accent rounded-2xl p-8 lg:p-12 text-center text-primary">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Need Expert Advice on Uniforms?
            </h3>
            <p className="text-primary/90 mb-6 max-w-2xl mx-auto font-body">
              Our team of uniform specialists is ready to help you make the
              right choices for your institution or organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-background px-6 py-3 text-base font-semibold text-text-primary hover:bg-surface transition-all"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/catalogue.pdf"
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-6 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-accent transition-all"
                download
              >
                Download Catalogue
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
