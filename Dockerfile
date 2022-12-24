FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /App

# Copy everything
COPY /back/wysiwyg ./
# Restore as distinct layers
RUN dotnet restore
# Build and publish a release
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /App
ENV DOTNET_URLS=http://+:7127+
ENV ASPNETCORE_URLS=http://+:7127
ENV ASPNETCORE_Kestrel__Certificates__Default__Password="password"
COPY --from=build-env /App/out .
ENTRYPOINT ["dotnet", "wysiwyg.dll"]