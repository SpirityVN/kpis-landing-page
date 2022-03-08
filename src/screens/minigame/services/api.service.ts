import axios from "axios";

export const ENVIRONMENTS = {
    DEVELOPMENT: "http://localhost:8080",
    PRODUCTION: "https://metaphor-service.herokuapp.com/",
  };
export const baseUrl =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? ENVIRONMENTS.DEVELOPMENT
      : ENVIRONMENTS.PRODUCTION;
export async function getMiniGameCommon(eventId: string): Promise<any> {
    try {
        let respone = await axios({
            baseURL: baseUrl,
            url: `/minigame/${eventId}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              },
        })
        return respone.data;
    } catch (error: any) {
        return error.response.data
    }
}
export async function getHistory(): Promise<any> {
    try {
        let respone = await axios({
            baseURL: baseUrl,
            url: '/minigame',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              },
        })
        return respone.data;
    } catch (error: any) {
        return error.response.data
    }
}

