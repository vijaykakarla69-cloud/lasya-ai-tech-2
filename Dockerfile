# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies (not copying package-lock.json to ensure optional dependencies are resolved for Alpine)
# Skip Sentry CLI installation to avoid network timeout issues during build
ENV SENTRY_SKIP_AUTO_INSTALL=1
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy standalone build from builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose port
EXPOSE 8083

# Set port environment variable
ENV PORT=8083

# Start the application using the standalone server
CMD ["node", "server.js"]