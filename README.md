# Lab-06

## PARTE I. INTEGRACIÓN CONTINUA

**1.** Cree (si no la tiene aún) una cuenta en el proveedor PAAS Heroku (www.heroku.com).

![image](https://user-images.githubusercontent.com/98135902/157537646-11ea64b8-efc1-4814-84da-fba0b0468768.png)

**2.** Acceda a su cuenta en Heroku y cree una nueva aplicación:

![image](https://user-images.githubusercontent.com/98135902/157537934-f3a78616-72c7-4d52-b28d-2adac3d44c1a.png)

**3.** Después de crear su cuenta en Heroku y la respectiva aplicación, genere una llave de API: Opción Manage

![image](https://user-images.githubusercontent.com/98135902/157539198-bf9b26e8-e35e-4763-96b3-2882567a3746.png)

**4.** Ingrese a la plataforma de integración contínua Circle.CI (www.circleci.com). Para ingresar, basta que se autentique con su usuario de GitHUB.

![image](https://user-images.githubusercontent.com/98135902/157539552-f3819ea2-0a89-4931-b20f-177f69fe17a7.png)

**5.** Seleccione la opción de agregar proyectos. En la organización o usuario de GitHub, seleccione el proyecto al que le va hacer despliegue continuo, y haga clic en "Build Project":

![image](https://user-images.githubusercontent.com/98135902/157541346-94c6f610-c8a6-4695-bcc0-9b1a6f131417.png)


  Una vez se inicie la primera construcción del proyecto, seleccione las opciones del proyecto (project settings)
  Vaya a CONTINUOUS DEPLOYMENT/Heroku Deployment, y realice los dos pasos indicados: (1) registrar la llave de Heroku, y (2) asociar su usuario para el despliegue:

![image](https://user-images.githubusercontent.com/98135902/157569745-796f2f6e-fec0-447b-9ceb-69ce8007ac7a.png)

**6.** Si todo queda correctamente configurado, cada vez que hagan un PUSH al repositorio, CircleCI ejecutará la fase de construcción del proyecto. Para que cuando las pruebas         pasen automáticamente se despliegue en Heroku, debe definir en el archivo circle.yml (ubicado en la raíz del proyecto):

        La rama del repositorio de GitHUB que se desplegará en Heroku. o El nombre de la aplicación de Heroku en la que se hará el despliegue.
        La ejecución de la fase ‘site’ de Maven, para generar la documentación de pruebas, cubrimiento de pruebas y análisis estático (cuando las mismas sean habilitadas).
        Ejemplo: https://github.com/PDSW-ECI/base-proyectos/blob/master/circle.yml
