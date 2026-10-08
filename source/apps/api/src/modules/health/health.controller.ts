import { Controller, Get } from "@nestjs/common";
import { DatabaseService } from "../../database/database.service.js";

@Controller("health")
export class HealthController {
  constructor(private readonly database: DatabaseService) {}

  @Get()
  check() {
    return { status: "ok", service: "kavian-api" };
  }

  @Get("database")
  async databaseCheck() {
    try {
      await this.database.ping();
      return { status: "ok", database: "postgresql" };
    } catch {
      return { status: "error", database: "postgresql" };
    }
  }
}
