FROM denoland/deno:1.46.3

WORKDIR /app

# Copy dependency files
COPY deno.json deno.lock ./

# Copy application code
COPY . .

# Cache dependencies
RUN deno cache main.ts

# Deno.serve() defaults to port 8000
EXPOSE 8000

# Run production server (main.ts with KV support)
CMD ["deno", "run", "-A", "--unstable-kv", "main.ts"]
