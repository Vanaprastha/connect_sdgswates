# Gunakan image Python resmi sebagai base image
FROM python:3.11-slim

# Set working directory di dalam container
WORKDIR /app

# Copy requirements.txt dan install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy seluruh kode aplikasi dan file env
COPY . .

# Expose port HTTPS backend
EXPOSE 9000

# Jalankan uvicorn langsung dengan sertifikat SSL
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "9000", "--ssl-certfile", "/etc/letsencrypt/live/sdgswates.dpdns.org-0001/fullchain.pem", "--ssl-keyfile", "/etc/letsencrypt/live/sdgswates.dpdns.org-0001/privkey.pem"]

