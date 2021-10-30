export const report = async () => {
    const url = 'http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/reports/fetch_reports?kids_id=f54ead50-c1be-11eb-9be1-0242ac110002';
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      throw error;
    }
  };