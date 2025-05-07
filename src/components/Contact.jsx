import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.body.classList.contains("dark-rv"));
  }, []);

  const getTextFieldStyles = {
    mb: 3,
    "& .MuiOutlinedInput-root": {
      backgroundColor: isDark ? "#111827" : "#fff",
      color: isDark ? "#f9fafb" : "#111827",
    },
    "& .MuiInputLabel-root": {
      color: isDark ? "#d1d5db" : "#6b7280",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: isDark ? "#4b5563" : "#d1d5db",
    },
  };

  return (
    <section
      id="contact"
      className="fade-in-up bg-theme-section py-16 px-4 rounded-lg shadow-md mb-16"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12 relative w-fit mx-auto after:block after:w-16 after:h-1 after:bg-violet-600 after:mt-2 after:mx-auto">
          Contacto
        </h2>

        <form>
          <TextField
            fullWidth
            label="Nombre"
            variant="outlined"
            sx={getTextFieldStyles}
          />
          <TextField
            fullWidth
            label="Correo electrónico"
            type="email"
            variant="outlined"
            sx={getTextFieldStyles}
          />
          <TextField
            fullWidth
            label="Mensaje"
            multiline
            rows={4}
            variant="outlined"
            sx={{ ...getTextFieldStyles, mb: 5 }}
          />

          <div className="text-center mb-10">
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                borderRadius: "9999px",
                padding: "0.75rem 2rem",
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "none",
                boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                transition: "all 0.3s",
                "&:hover": {
                  backgroundColor: "#2563eb",
                },
              }}
            >
              Enviar mensaje
            </Button>
          </div>
        </form>

        <div className="mt-10 text-center text-base leading-relaxed">
          <p className="mb-2">
            <i className="fas fa-envelope mr-2 text-violet-600"></i>
            <strong>rauleduardovigil@gmail.com</strong>
          </p>
          <p>
            <i className="fas fa-phone mr-2 text-violet-600"></i>
            <strong>7596-5375</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
