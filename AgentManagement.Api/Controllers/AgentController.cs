using AgentManagement.Core.Entities;
using AgentManagement.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AgentManagement.Api.Controllers
{
    [RoutePrefix("api/v1/Agent")]
    public class AgentController : ApiController
    {
        private readonly IBusinessEntitiesRepository businessEntitiesRepository;

        public AgentController(IBusinessEntitiesRepository businessEntitiesRepository)
        {
            this.businessEntitiesRepository = businessEntitiesRepository;
        }

        [HttpGet]
        [Route("GetBy/{id}")]
        public IHttpActionResult GetBy(long id)
        {
            try
            {
                var result = businessEntitiesRepository.GetBy(id);

                return Ok(new { success = true, data = result });
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                //return Ok(new { success = true, errorMessage = ex.GetBaseException() });
                return Content(HttpStatusCode.NotFound, message);
            }
        }

        [HttpGet]
        [Route("GetAll")]
        public IHttpActionResult GetAll()
        {
            try
            {
                var result = businessEntitiesRepository.GetAll();

                return Ok(new { success = true, data = result });
            }
            catch (Exception ex)
            {
                return Ok(new { success = true, errorMessage = ex.GetBaseException() });
            }
        }

        [HttpPost]
        [Route("Insert")]
        public IHttpActionResult Insert(BusinessEntities model)
        {
            try
            {
                var result = businessEntitiesRepository.Insert(model);

                return Ok(new { success = true, data = result, successMessage = "Insert Successful" });
            }
            catch (Exception ex)
            {
                return Ok(new { success = true, errorMessage = ex.GetBaseException() });
            }
        }

        [HttpPut]
        [Route("Update")]
        public IHttpActionResult Update(BusinessEntities model)
        {
            try
            {
                var result = businessEntitiesRepository.Update(model);

                return Ok(new { success = true, data = result, successMessage = "Update Successful" });
            }
            catch (Exception ex)
            {
                return Ok(new { success = true, errorMessage = ex.GetBaseException() });
            }
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public IHttpActionResult Delete(long id)
        {
            try
            {
                var result = businessEntitiesRepository.Delete(id);

                return Ok(new { success = true, data = result, successMessage = "Delete Successful" });
            }
            catch (Exception ex)
            {
                return Ok(new { success = true, errorMessage = ex.GetBaseException() });
            }
        }
    }
}
