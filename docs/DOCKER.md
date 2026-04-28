# Docker Setup for Local Development

## PostgreSQL Database

Cette configuration fournit une base de données PostgreSQL conteneurisée pour le développement local.

### Démarrer la base de données

```bash
docker-compose up -d
```

### Arrêter la base de données

```bash
docker-compose down
```

### Accéder à la base de données

**Via psql:**
```bash
psql -h localhost -U postgres -d ticket_api
```

**Via Docker:**
```bash
docker exec -it ticket-api-postgres psql -U postgres -d ticket_api
```

### Configuration

Les variables d'environnement par défaut sont:
- `DB_HOST`: localhost
- `DB_PORT`: 5432
- `DB_NAME`: ticket_api
- `DB_USER`: postgres
- `DB_PASSWORD`: postgres

Pour personnaliser ces valeurs, créez un fichier `.env` à la racine du projet basé sur `.env.example`.

### Volume des données

Les données PostgreSQL sont stockées dans le dossier `/db_data/` au niveau local. Ce dossier:
- ✅ Est conservé entre les redémarrages du conteneur
- ✅ Permet un contrôle et une clarté totale des données locales
- ❌ N'est **pas** versionné dans le repo (exclu du .gitignore)

### Supprimer toutes les données

```bash
docker-compose down -v
```

**Attention:** Cela supprime également le volume de la base de données.
