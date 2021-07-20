import client from "./HttpClient";

class StatisticsController {
  static async getStatistics() {
    try {
      const response = await client.get(`/stastistics`);
      return response;
    } catch (err) {
      throw err;
    }
  }
}

export default StatisticsController;
