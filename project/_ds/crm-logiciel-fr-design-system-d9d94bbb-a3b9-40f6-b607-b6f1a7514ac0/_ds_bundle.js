/* @ds-bundle: {"format":3,"namespace":"CrmLogicielFrDesignSystem_d9d94b","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Chart","sourcePath":"components/data/Chart.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Faders","sourcePath":"components/data/Faders.jsx"},{"name":"ProductCard","sourcePath":"components/data/ProductCard.jsx"},{"name":"StatDiscs","sourcePath":"components/data/StatDiscs.jsx"},{"name":"Callout","sourcePath":"components/editorial/Callout.jsx"},{"name":"ProsCons","sourcePath":"components/editorial/ProsCons.jsx"},{"name":"PullQuote","sourcePath":"components/editorial/PullQuote.jsx"},{"name":"ColumnRow","sourcePath":"components/layout/ColumnRow.jsx"},{"name":"Visual","sourcePath":"components/layout/ColumnRow.jsx"},{"name":"FeatureColumns","sourcePath":"components/layout/FeatureColumns.jsx"},{"name":"GlassPanel","sourcePath":"components/layout/GlassPanel.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"21a1cc14b716","components/core/Button.jsx":"232068f08e14","components/core/Input.jsx":"91a2966faecc","components/data/Chart.jsx":"83b23314da97","components/data/DataTable.jsx":"84a0f8464145","components/data/Faders.jsx":"9c0cdf8e21bb","components/data/ProductCard.jsx":"3d23b81796df","components/data/StatDiscs.jsx":"ae4abd52dfa1","components/editorial/Callout.jsx":"50cd3ef14170","components/editorial/ProsCons.jsx":"300bf5f44d9e","components/editorial/PullQuote.jsx":"ec700c981470","components/layout/ColumnRow.jsx":"53b889204a35","components/layout/FeatureColumns.jsx":"b97865c1dae8","components/layout/GlassPanel.jsx":"e6264c6dbcd1","ui_kits/site/ArticleScreen.jsx":"9bd6a83eac01","ui_kits/site/AuteurScreen.jsx":"122a6c5c056f","ui_kits/site/Chrome.jsx":"e6a8459dbeae","ui_kits/site/ComparatifScreen.jsx":"46226a2852ca","ui_kits/site/FicheAvisScreen.jsx":"25901311aaf8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CrmLogicielFrDesignSystem_d9d94b = window.CrmLogicielFrDesignSystem_d9d94b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — sticker pilule. Plein dégradé, contour épais (pop) ou doux teinté.
 * Vert = positif, corail = négatif/alerte, violet = marque, teal/orange accents.
 */
function Badge({
  tone = 'neutral',
  variant = 'soft',
  mono = false,
  dot = false,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      fg: 'var(--ink)',
      line: 'var(--ink)',
      soft: 'var(--paper-sunk)',
      grad: 'var(--grad-cool)'
    },
    blue: {
      fg: 'var(--blue-ink)',
      line: 'var(--blue)',
      soft: 'var(--blue-tint)',
      grad: 'var(--grad-brand)'
    },
    teal: {
      fg: 'var(--teal-ink)',
      line: 'var(--teal)',
      soft: 'var(--teal-tint)',
      grad: 'var(--grad-aqua)'
    },
    orange: {
      fg: 'var(--orange-ink)',
      line: 'var(--orange)',
      soft: 'var(--orange-tint)',
      grad: 'var(--grad-sunset)'
    },
    positive: {
      fg: 'var(--green-ink)',
      line: 'var(--green)',
      soft: 'var(--green-tint)',
      grad: 'linear-gradient(135deg,#2E2EFF,#18A6F6)'
    },
    negative: {
      fg: 'var(--minium-ink)',
      line: 'var(--minium)',
      soft: 'var(--minium-tint)',
      grad: 'var(--grad-sunset)'
    }
  };
  const t = tones[tone];
  const variants = {
    soft: {
      background: t.soft,
      color: t.fg,
      border: 'none'
    },
    outline: {
      background: '#fff',
      color: t.fg,
      border: `1px solid ${t.line}`
    },
    solid: {
      background: t.line,
      color: '#fff',
      border: 'none'
    },
    gradient: {
      background: t.grad,
      color: '#fff',
      border: 'none'
    },
    pop: {
      background: '#fff',
      color: t.fg,
      border: `2px solid ${t.line}`,
      boxShadow: `3px 3px 0 ${t.line}`
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-tone": tone,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: variant === 'pop' ? '4px 12px' : '4px 11px',
      borderRadius: '0',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-ui)',
      fontSize: mono ? '11.5px' : '12px',
      fontWeight: mono ? 600 : 700,
      letterSpacing: mono ? '0.04em' : '0.01em',
      lineHeight: 1.3,
      whiteSpace: 'nowrap',
      ...variants[variant],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '7px',
      height: '7px',
      borderRadius: '999px',
      background: variant === 'solid' || variant === 'gradient' ? '#fff' : t.line,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — bouton pilule. Primaire en dégradé lumineux + halo, secondaire en
 * verre dépoli, accents teal/orange/corail. Gros arrondis.
 */
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  fullWidth = false,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '13px',
      minHeight: '38px',
      gap: '6px'
    },
    md: {
      padding: '11px 22px',
      fontSize: '15px',
      minHeight: '46px',
      gap: '8px'
    },
    lg: {
      padding: '15px 30px',
      fontSize: '17px',
      minHeight: '56px',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--grad-brand)',
      color: '#fff',
      border: '2px solid var(--ink)',
      boxShadow: 'var(--shadow-pop)'
    },
    secondary: {
      background: '#fff',
      color: 'var(--ink)',
      border: '2px solid var(--ink)',
      boxShadow: 'var(--shadow-pop)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--blue)',
      border: '2px solid transparent'
    },
    teal: {
      background: 'var(--grad-aqua)',
      color: '#fff',
      border: '2px solid var(--ink)',
      boxShadow: 'var(--shadow-pop)'
    },
    minium: {
      background: 'var(--grad-sunset)',
      color: 'var(--ink)',
      border: '2px solid var(--ink)',
      boxShadow: 'var(--shadow-pop)'
    },
    'minium-outline': {
      background: '#fff',
      color: 'var(--minium-ink)',
      border: '2px solid var(--minium)'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? disabled : undefined,
    "data-variant": variant,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      borderRadius: '0',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      textDecoration: 'none',
      width: fullWidth ? '100%' : 'auto',
      transition: 'transform 120ms ease, box-shadow 120ms ease',
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) {
        e.currentTarget.style.transform = 'translate(-2px,-2px)';
        e.currentTarget.style.boxShadow = '7px 7px 0 var(--ink)';
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = '';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — champ de saisie sur blanc data, angle vif, filet hairline.
 * Focus = filet bleu de travail. La valeur numérique se compose en mono.
 */
function Input({
  label = null,
  hint = null,
  error = null,
  prefix = null,
  suffix = null,
  mono = false,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? `f-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const lineColor = error ? 'var(--minium)' : 'var(--hairline-strong)';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'block',
      fontFamily: 'var(--font-ui)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--ink)',
      marginBottom: '6px'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: 'var(--glass-bg-strong)',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
      border: `2px solid ${lineColor}`,
      borderRadius: 'var(--radius-full)',
      padding: '0 18px',
      minHeight: '50px',
      transition: 'border-color 150ms ease, box-shadow 150ms ease'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-55)',
      marginRight: '8px',
      fontSize: '14px'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-ui)',
      fontSize: '15px',
      color: 'var(--ink)',
      minWidth: 0,
      fontVariantNumeric: mono ? 'tabular-nums lining-nums' : 'normal',
      ...style
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-55)',
      marginLeft: '8px',
      fontSize: '14px',
      fontFamily: 'var(--font-mono)'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '6px',
      fontSize: '12px',
      color: error ? 'var(--minium-ink)' : 'var(--ink-55)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/data/Chart.jsx
try { (() => {
/**
 * Chart — graphique éditorial clair (ex-écran, redessiné) : grille douce, aire
 * dégradée, ligne dégradée, point d'inflexion mis en avant. Posé sur verre.
 * `values` : tableau de nombres ; `max` borne le haut (défaut = max des valeurs).
 */
function Chart({
  title = null,
  caption = null,
  values = [],
  max = null,
  highlight = null,
  // index du point à marquer
  height = 170,
  style = {}
}) {
  const W = 900,
    H = 170;
  const top = max || Math.max(...values, 1);
  const n = values.length;
  const pts = values.map((v, i) => {
    const x = n <= 1 ? 0 : i / (n - 1) * W;
    const y = H - v / top * (H - 16) - 8;
    return [x, y];
  });
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const area = `${line} L${W},${H} L0,${H} Z`;
  const uid = React.useMemo(() => 'ch' + Math.random().toString(36).slice(2, 7), []);
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      borderRadius: 'var(--radius-xl)',
      padding: '22px 24px',
      background: 'var(--glass-bg-strong)',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
      border: '1px solid var(--glass-border)',
      boxShadow: 'var(--shadow-soft), var(--glass-highlight)',
      ...style
    }
  }, (title || caption) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '10px',
      marginBottom: '14px'
    }
  }, title && /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '17px',
      letterSpacing: '-0.01em',
      color: 'var(--ink)'
    }
  }, title), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--ink-55)'
    }
  }, caption)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      borderRadius: 'var(--radius-md)',
      backgroundImage: 'linear-gradient(rgba(17,42,27,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(17,42,27,.06) 1px, transparent 1px)',
      backgroundSize: '100% 34px, 9% 100%'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `${uid}l`,
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#FFD400"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".5",
    stopColor: "#18A6F6"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#2E2EFF"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: `${uid}a`,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "rgba(46,46,255,.26)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "rgba(46,46,255,0)"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: `url(#${uid}a)`
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: `url(#${uid}l)`,
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  })), highlight != null && pts[highlight] && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: `${pts[highlight][0] / W * 100}%`,
      top: `${pts[highlight][1] / H * 100}%`,
      width: '11px',
      height: '11px',
      borderRadius: '999px',
      background: 'var(--blue)',
      border: '2.5px solid #fff',
      transform: 'translate(-50%,-50%)',
      boxShadow: '0 2px 8px rgba(46,46,255,.5)'
    }
  })));
}
Object.assign(__ds_scope, { Chart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Chart.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
/**
 * DataTable — tableau comparatif design : en-tête en dégradé, lignes à surligner
 * (`best`), puces de verdict, verre clair. Colonnes `num` en mono alignées à droite.
 */
function DataTable({
  columns = [],
  // [{ key, label, align?, num?, width?, sticky? }]
  rows = [],
  // [{ [key]: value | {value, tone}, _best? }]
  caption = null,
  stickyHeader = true,
  style = {}
}) {
  const toneColor = tone => ({
    positive: 'var(--green-ink)',
    negative: 'var(--minium-ink)',
    muted: 'var(--ink-55)',
    strong: 'var(--ink)'
  })[tone] || 'inherit';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--glass-bg-strong)',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
      boxShadow: 'var(--shadow-soft), var(--glass-highlight)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-ui)',
      minWidth: columns.length > 4 ? '640px' : 'auto'
    }
  }, caption && /*#__PURE__*/React.createElement("caption", {
    style: {
      captionSide: 'top',
      textAlign: 'left',
      padding: '14px 16px',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-55)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, caption), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, ci) => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    scope: "col",
    style: {
      position: stickyHeader ? 'sticky' : 'static',
      top: 0,
      zIndex: 2,
      textAlign: c.align || (c.num ? 'right' : 'left'),
      padding: '14px 18px',
      background: 'var(--grad-brand)',
      fontSize: '11.5px',
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: '#fff',
      whiteSpace: 'nowrap',
      width: c.width,
      left: c.sticky ? 0 : undefined
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => {
    const best = row._best;
    const rowBg = best ? 'linear-gradient(90deg, rgba(46,46,255,.12), transparent)' : 'transparent';
    return /*#__PURE__*/React.createElement("tr", {
      key: ri,
      style: {
        background: rowBg
      }
    }, columns.map(c => {
      const cell = row[c.key];
      const value = cell && typeof cell === 'object' && 'value' in cell ? cell.value : cell;
      const tone = cell && typeof cell === 'object' ? cell.tone : undefined;
      return /*#__PURE__*/React.createElement("td", {
        key: c.key,
        style: {
          textAlign: c.align || (c.num ? 'right' : 'left'),
          padding: '13px 18px',
          borderBottom: ri < rows.length - 1 ? '1px solid var(--hairline)' : 'none',
          fontFamily: c.num ? 'var(--font-mono)' : 'var(--font-ui)',
          fontVariantNumeric: c.num ? 'tabular-nums lining-nums' : 'normal',
          fontSize: '14px',
          fontWeight: c.sticky ? 700 : c.num ? 500 : 400,
          color: toneColor(tone) === 'inherit' ? c.sticky ? 'var(--ink)' : 'var(--ink-80)' : toneColor(tone),
          whiteSpace: 'nowrap',
          position: c.sticky ? 'sticky' : 'static',
          left: c.sticky ? 0 : undefined
        }
      }, value);
    }));
  })))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/Faders.jsx
try { (() => {
/**
 * Faders — notation par faders : curseur physique sur rail gradué (console),
 * en verre clair. Remplace la barre de progression. Le chiffre est en mono.
 */
function Faders({
  items = [],
  style = {}
}) {
  const gradFor = (v, max) => {
    const r = v / max;
    return r >= 0.7 ? 'var(--grad-aqua)' : r >= 0.5 ? 'var(--grad-cool)' : 'var(--grad-sunset)';
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '2px',
      ...style
    }
  }, items.map((it, i) => {
    const max = it.max || 10;
    const pct = Math.max(0, Math.min(1, it.value / max)) * 100;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '140px 1fr 48px',
        alignItems: 'center',
        gap: '14px',
        padding: '9px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--ink-80)'
      }
    }, it.label), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: '22px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        height: '10px',
        backgroundImage: 'repeating-linear-gradient(90deg, var(--hairline-strong) 0 1px, transparent 1px 10%)',
        opacity: 0.6
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: '50%',
        height: '4px',
        transform: 'translateY(-50%)',
        background: 'var(--paper-sunk)',
        borderRadius: '999px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: `${pct}%`,
        background: gradFor(it.value, max),
        borderRadius: '999px'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '50%',
        left: `${pct}%`,
        width: '16px',
        height: '24px',
        transform: 'translate(-50%,-50%)',
        borderRadius: '7px',
        background: '#fff',
        border: '2px solid var(--blue)',
        boxShadow: '0 4px 10px -2px rgba(46,46,255,.5)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '50%',
        top: '4px',
        bottom: '4px',
        width: '1.5px',
        background: 'var(--blue)',
        transform: 'translateX(-50%)'
      }
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: '16px',
        textAlign: 'right',
        color: 'var(--ink)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, it.value.toFixed(1).replace('.', ',')));
  }));
}
Object.assign(__ds_scope, { Faders });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Faders.jsx", error: String((e && e.message) || e) }); }

// components/data/ProductCard.jsx
try { (() => {
const VERDICTS = {
  positive: {
    grad: 'var(--grad-aqua)',
    label: 'Recommandé'
  },
  neutral: {
    grad: 'var(--grad-cool)',
    label: 'Sous conditions'
  },
  negative: {
    grad: 'var(--grad-sunset)',
    label: 'À éviter'
  }
};

/**
 * ProductCard — fiche outil en verre, avec une pastille de note dégradée qui
 * déborde du coin (relief). Remplace l'étiquette. Chiffres en mono.
 */
function ProductCard({
  name,
  category = null,
  score = null,
  verdict = 'neutral',
  verdictLabel = null,
  specs = [],
  // [{ label, value }]
  href = null,
  style = {}
}) {
  const v = VERDICTS[verdict] || VERDICTS.neutral;
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href || undefined,
    style: {
      position: 'relative',
      display: 'block',
      textDecoration: 'none',
      background: 'var(--glass-bg-strong)',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-soft), var(--glass-highlight)',
      padding: '24px 26px 22px',
      overflow: 'visible',
      ...style
    }
  }, score != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '-16px',
      right: '20px',
      width: '70px',
      height: '70px',
      borderRadius: '20px',
      background: v.grad,
      transform: 'rotate(-6deg)',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      boxShadow: 'var(--shadow-disc), inset 0 1px 0 rgba(255,255,255,.6)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '24px',
      color: '#fff',
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, score.toFixed(1).replace('.', ',')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: '8.5px',
      letterSpacing: '0.1em',
      color: 'rgba(255,255,255,.9)'
    }
  }, "/10"))), category && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-55)'
    }
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '26px',
      letterSpacing: '-0.02em',
      color: 'var(--ink)',
      margin: '4px 0 14px',
      maxWidth: '70%'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      padding: '5px 13px',
      borderRadius: '999px',
      background: v.grad,
      color: '#fff',
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: '12px'
    }
  }, verdictLabel || v.label), specs.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '18px',
      marginTop: '16px',
      paddingTop: '14px',
      borderTop: '1px solid var(--hairline)'
    }
  }, specs.slice(0, 3).map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-55)'
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: '16px',
      color: 'var(--ink)',
      marginTop: '2px',
      fontVariantNumeric: 'tabular-nums'
    }
  }, s.value)))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/data/StatDiscs.jsx
try { (() => {
const GRADS = ['linear-gradient(150deg, #2E2EFF, #18A6F6)', 'linear-gradient(150deg, #18A6F6, #2E2EFF)', 'linear-gradient(150deg, #FFD400, #FFA800)', 'linear-gradient(150deg, #1C1CCC, #2E2EFF)'];

/**
 * StatDiscs — disques de chiffres clés qui flottent en couches (relief).
 * Chacun porte sa propre ombre et un léger angle. 2 à 4 disques.
 */
function StatDiscs({
  items = [],
  style = {}
}) {
  const list = items.slice(0, 4);
  const rot = [-6, 5, -3, 4];
  const sizes = [124, 100, 92, 84];
  const pos = [{
    left: '6px',
    top: '20px',
    zIndex: 4
  }, {
    right: '16px',
    top: '0',
    zIndex: 3
  }, {
    right: '42px',
    bottom: '0',
    zIndex: 2
  }, {
    left: '30px',
    bottom: '6px',
    zIndex: 1
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '188px',
      ...style
    }
  }, list.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      width: `${sizes[i]}px`,
      height: `${sizes[i]}px`,
      borderRadius: '24px',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      background: it.gradient || GRADS[i % GRADS.length],
      transform: `rotate(${rot[i]}deg)`,
      border: '1px solid rgba(255,255,255,.55)',
      boxShadow: 'var(--shadow-disc), inset 0 1px 0 rgba(255,255,255,.7)',
      ...pos[i]
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '28px',
      color: '#fff',
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, it.value, it.unit && /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: '14px',
      opacity: 0.85
    }
  }, it.unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9.5px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.92)',
      marginTop: '4px'
    }
  }, it.label)))));
}
Object.assign(__ds_scope, { StatDiscs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatDiscs.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  astuce: 'M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z',
  retenir: 'm9 11 3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
  attention: 'M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z'
};
const TONES = {
  astuce: {
    grad: 'var(--grad-aqua)',
    label: 'var(--teal-ink)',
    glow: 'rgba(24,166,246,.42)',
    default: 'Astuce'
  },
  retenir: {
    grad: 'var(--grad-brand)',
    label: 'var(--blue-ink)',
    glow: 'rgba(46,46,255,.4)',
    default: 'À retenir'
  },
  attention: {
    grad: 'var(--grad-sunset)',
    label: 'var(--minium-ink)',
    glow: 'rgba(255,168,0,.45)',
    default: 'Attention'
  }
};

/**
 * Callout — encadré éditorial en verre dosé, avec disque d'icône en relief.
 * 3 tons : astuce (teal), retenir (violet), attention (corail). Pas de filet-gauche.
 */
function Callout({
  tone = 'astuce',
  label = null,
  icon = null,
  children,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.astuce;
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      padding: '24px 28px 22px 88px',
      margin: 0,
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(var(--glass-blur)) saturate(145%)',
      WebkitBackdropFilter: 'blur(var(--glass-blur)) saturate(145%)',
      border: '1px solid var(--glass-border)',
      boxShadow: 'var(--shadow-soft), var(--glass-highlight)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '24px',
      top: '24px',
      width: '48px',
      height: '48px',
      borderRadius: '15px',
      display: 'grid',
      placeItems: 'center',
      background: t.grad,
      boxShadow: `0 12px 22px -8px ${t.glow}, inset 0 1px 0 rgba(255,255,255,.5)`
    }
  }, icon || /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: ICONS[tone] || ICONS.astuce
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: t.label,
      fontWeight: 600
    }
  }, label || t.default), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15.5px',
      lineHeight: 1.6,
      color: 'var(--ink)',
      marginTop: '5px',
      maxWidth: '60ch'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Callout.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ProsCons.jsx
try { (() => {
/**
 * ProsCons — double colonne Avantages / Inconvénients, titres H3, colonnes en
 * verre teinté (émeraude / corail), marqueurs + / −. Même hauteur.
 */
function ProsCons({
  pros = [],
  cons = [],
  prosTitle = 'Avantages',
  consTitle = 'Inconvénients',
  gap = 20,
  collapseAt = 760,
  style = {}
}) {
  const id = React.useMemo(() => 'pc' + Math.random().toString(36).slice(2, 8), []);
  const Col = ({
    title,
    items,
    tint,
    color,
    mark,
    icon
  }) => /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: `linear-gradient(160deg, ${tint}, rgba(255,255,255,.6))`,
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-soft), var(--glass-highlight)',
      padding: '22px 24px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '17px',
      letterSpacing: '-0.01em',
      color,
      margin: '0 0 14px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "19",
    height: "19",
    fill: "none",
    stroke: color,
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: icon
  })), title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: '11px'
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: '11px',
      fontFamily: 'var(--font-sans)',
      fontSize: '14.5px',
      lineHeight: 1.5,
      color: 'var(--ink-80)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color,
      fontWeight: 800,
      flex: 'none',
      fontFamily: 'var(--font-mono)',
      lineHeight: 1.4
    }
  }, mark), /*#__PURE__*/React.createElement("span", null, t)))));
  return /*#__PURE__*/React.createElement("div", {
    "data-pc": id,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: typeof gap === 'number' ? `${gap}px` : gap,
      alignItems: 'stretch',
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `@media (max-width:${collapseAt}px){[data-pc="${id}"]{grid-template-columns:1fr !important;}}`), /*#__PURE__*/React.createElement(Col, {
    title: prosTitle,
    items: pros,
    tint: "rgba(0,184,148,.12)",
    color: "var(--green-ink)",
    mark: "+",
    icon: "m9 11 3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  }), /*#__PURE__*/React.createElement(Col, {
    title: consTitle,
    items: cons,
    tint: "rgba(251,44,87,.10)",
    color: "var(--minium-ink)",
    mark: "\u2212",
    icon: "M18 6 6 18M6 6l12 12"
  }));
}
Object.assign(__ds_scope, { ProsCons });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ProsCons.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PullQuote.jsx
try { (() => {
/**
 * PullQuote — citation éditoriale : guillemet géant en dégradé iris, texte en
 * Space Grotesk, signature avec pastille initiales. Posée sur verre teinté.
 */
function PullQuote({
  children,
  author = null,
  role = null,
  initials = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      position: 'relative',
      margin: 0,
      padding: '30px 30px 26px 84px',
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(135deg, rgba(46,46,255,.08), rgba(255,212,0,.07)), var(--glass-bg-strong)',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
      border: '1px solid var(--glass-border)',
      boxShadow: 'var(--shadow-soft), var(--glass-highlight)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '22px',
      top: '6px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '96px',
      lineHeight: 1,
      background: 'var(--grad-iris)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(20px, 3vw, 27px)',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: 'var(--ink)'
    }
  }, children), (author || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginTop: '16px'
    }
  }, initials && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '40px',
      height: '40px',
      borderRadius: '999px',
      background: 'var(--grad-brand)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '15px',
      flex: 'none'
    }
  }, initials), /*#__PURE__*/React.createElement("span", null, author && /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      color: 'var(--ink)',
      display: 'block'
    }
  }, author), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--ink-55)'
    }
  }, role))));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/layout/ColumnRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LAYOUTS = {
  'image-text': '1.7fr 1fr',
  'text-image': '1fr 1.7fr',
  'two': '1fr 1fr',
  'aside-body': '1fr 2fr',
  'body-aside': '2fr 1fr',
  'three': 'repeat(3, 1fr)'
};

/**
 * ColumnRow — système de colonnage éditorial pour rythmer un article :
 * image+texte, deux colonnes, aparté+corps asymétrique, grille 3 colonnes.
 * Repasse en pleine largeur sous le point de rupture.
 */
function ColumnRow({
  layout = 'two',
  gap = 24,
  align = 'start',
  // 'start' | 'center' | 'stretch'
  collapseAt = 760,
  children,
  style = {},
  ...rest
}) {
  const cols = LAYOUTS[layout] || LAYOUTS.two;
  const id = React.useMemo(() => 'cr' + Math.random().toString(36).slice(2, 8), []);
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-col-layout": layout,
    style: {
      display: 'grid',
      gridTemplateColumns: cols,
      gap: typeof gap === 'number' ? `${gap}px` : gap,
      alignItems: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `@media (max-width:${collapseAt}px){[data-col-layout="${layout}"]{grid-template-columns:1fr !important;}}`), children);
}

/**
 * Visual — placeholder visuel dégradé pour le colonnage (capture, image).
 * Remplacez par une vraie image en production.
 */
function Visual({
  label = null,
  height = 196,
  gradient = 'linear-gradient(140deg, #2E2EFF, #18A6F6 58%, #FFD400)',
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      minHeight: height,
      overflow: 'hidden',
      background: gradient,
      boxShadow: 'var(--shadow-raise)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 80% at 80% 0%, rgba(255,255,255,.32), transparent 52%)'
    }
  }), children, label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '14px',
      bottom: '14px',
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'rgba(0,0,0,.20)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      padding: '6px 12px',
      borderRadius: '999px'
    }
  }, label));
}
Object.assign(__ds_scope, { ColumnRow, Visual });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ColumnRow.jsx", error: String((e && e.message) || e) }); }

// components/layout/FeatureColumns.jsx
try { (() => {
const ORB_GRADS = ['var(--grad-brand)', 'var(--grad-aqua)', 'var(--grad-sunset)', 'var(--grad-cool)'];

/**
 * FeatureColumns — colonnes alignées de même hauteur : pictogramme (ou image)
 * en haut, titre H3 + texte au milieu, bouton calé en bas. 2 à 4 colonnes,
 * repasse en pleine largeur sous le point de rupture.
 */
function FeatureColumns({
  items = [],
  // [{ icon?, image?, eyebrow?, title, text, action?: {label, href, onClick} }]
  columns = 3,
  gap = 22,
  collapseAt = 820,
  style = {}
}) {
  const id = React.useMemo(() => 'fc' + Math.random().toString(36).slice(2, 8), []);
  return /*#__PURE__*/React.createElement("div", {
    "data-fc": id,
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: typeof gap === 'number' ? `${gap}px` : gap,
      alignItems: 'stretch',
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `@media (max-width:${collapseAt}px){[data-fc="${id}"]{grid-template-columns:1fr !important;}}`), items.map((it, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--glass-bg-strong)',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-soft), var(--glass-highlight)',
      padding: '24px 24px 22px',
      overflow: 'hidden'
    }
  }, it.image ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-md)',
      height: '128px',
      marginBottom: '18px',
      overflow: 'hidden',
      background: it.image,
      boxShadow: 'var(--shadow-raise)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 80% at 80% 0%, rgba(255,255,255,.32), transparent 52%)'
    }
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: '56px',
      height: '56px',
      borderRadius: '18px',
      display: 'grid',
      placeItems: 'center',
      background: ORB_GRADS[i % ORB_GRADS.length],
      marginBottom: '18px',
      boxShadow: 'var(--shadow-disc), inset 0 1px 0 rgba(255,255,255,.5)'
    }
  }, it.icon), it.eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--blue-ink)',
      marginBottom: '6px'
    }
  }, it.eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '19px',
      letterSpacing: '-0.01em',
      color: 'var(--ink)',
      margin: '0 0 8px'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14.5px',
      lineHeight: 1.55,
      color: 'var(--ink-80)',
      margin: 0
    }
  }, it.text), it.action && /*#__PURE__*/React.createElement("a", {
    href: it.action.href || '#',
    onClick: it.action.onClick,
    style: {
      marginTop: 'auto',
      alignSelf: 'flex-start',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: '14px',
      color: '#fff',
      background: 'var(--grad-brand)',
      padding: '11px 20px',
      borderRadius: 'var(--radius-full)',
      textDecoration: 'none',
      paddingTop: '11px',
      boxShadow: '0 14px 28px -12px rgba(46,46,255,.55)'
    }
  }, it.action.label))));
}
Object.assign(__ds_scope, { FeatureColumns });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FeatureColumns.jsx", error: String((e && e.message) || e) }); }

// components/layout/GlassPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GlassPanel — surface en verre dosé (recette v3) : voile translucide, reflet
 * d'arête, ombre douce. La brique de base de toutes les compositions.
 */
function GlassPanel({
  as = 'div',
  padding = 'lg',
  radius = 'xl',
  strong = false,
  children,
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: '16px 18px',
    md: '20px 22px',
    lg: '24px 28px',
    xl: '32px 34px'
  };
  const radii = {
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)'
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      position: 'relative',
      background: strong ? 'var(--glass-bg-strong)' : 'var(--glass-bg)',
      backdropFilter: 'blur(var(--glass-blur)) saturate(148%)',
      WebkitBackdropFilter: 'blur(var(--glass-blur)) saturate(148%)',
      border: '1px solid var(--glass-border)',
      borderRadius: radii[radius] || radii.xl,
      boxShadow: 'var(--shadow-soft), var(--glass-highlight)',
      padding: pads[padding] ?? pads.lg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/GlassPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ArticleScreen.jsx
try { (() => {
// Guide / article long-form : montre le colonnage, les callouts, la citation,
// le graphique en situation. Corps en sans, titres en Space Grotesk.
function ArticleScreen({
  onNav
}) {
  const {
    Callout,
    PullQuote,
    GlassPanel,
    ColumnRow,
    Visual,
    Chart,
    Button,
    Badge
  } = window.CrmLogicielFrDesignSystem_d9d94b;
  return /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      padding: '40px 0 26px'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: ['Guides', 'TPE & indépendants']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      margin: '18px 0 14px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "blue",
    variant: "gradient"
  }, "Guide de d\xE9cision"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    mono: true,
    variant: "soft"
  }, "11 min de lecture")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 'clamp(34px, 6.5vw, 60px)',
      lineHeight: 0.98,
      letterSpacing: '-0.03em',
      color: 'var(--ink)',
      margin: 0,
      maxWidth: '17ch'
    }
  }, "Quel CRM pour une TPE de services en ", /*#__PURE__*/React.createElement("span", {
    className: "text-gradient"
  }, "2026"), " ?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'clamp(17px, 2.4vw, 21px)',
      lineHeight: 1.5,
      color: 'var(--ink-80)',
      maxWidth: '54ch',
      marginTop: 18
    }
  }, "Sept outils test\xE9s sur des comptes r\xE9els pendant trois semaines. Un budget, des cas d'usage, des chiffres. Aucune promesse d'\xE9diteur."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 999,
      background: 'var(--grad-brand)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 14
    }
  }, "JL"), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, "Julien Lefevre"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-55)'
    }
  }, "Mis \xE0 jour le 12 juin 2026")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "prose dropcap",
    style: {
      maxWidth: '100%'
    }
  }, "Un CRM pour une TPE de services ne se choisit pas sur la liste de fonctionnalit\xE9s : il se choisit sur la friction quotidienne. Nous avons ouvert sept comptes r\xE9els, import\xE9 un fichier de 3 000 contacts, et chronom\xE9tr\xE9 chaque op\xE9ration courante."), /*#__PURE__*/React.createElement(Callout, {
    tone: "astuce"
  }, "Importez d'abord ", /*#__PURE__*/React.createElement("b", null, "50 contacts test"), " avant de migrer tout votre fichier : vous rep\xE9rez les champs mal mapp\xE9s en 5 minutes, au lieu de corriger 3 000 fiches apr\xE8s coup."), /*#__PURE__*/React.createElement(ColumnRow, {
    layout: "image-text",
    align: "center",
    gap: 32
  }, /*#__PURE__*/React.createElement(Visual, {
    label: "Pipedrive \xB7 vue pipeline, 08/06",
    height: 220
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.02em',
      color: 'var(--ink)',
      margin: '0 0 10px'
    }
  }, "Ce que nous avons mesur\xE9"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--ink-80)',
      margin: 0
    }
  }, "Import de 3 000 contacts, prise en main jusqu'\xE0 la premi\xE8re fiche compl\xE8te, d\xE9lai de r\xE9ponse du support en fran\xE7ais, et co\xFBt r\xE9el \xE0 12 mois options incluses."))), /*#__PURE__*/React.createElement(ColumnRow, {
    layout: "two",
    align: "start",
    gap: 32
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'var(--ink-80)',
      margin: 0
    }
  }, "Le constat tient en une phrase : le prix affich\xE9 ne pr\xE9dit ni la qualit\xE9 du support, ni la rapidit\xE9 de prise en main. Trois outils sortent du lot."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'var(--ink-80)',
      margin: 0
    }
  }, "Deux sont \xE0 \xE9viter pour ce profil. Le reste se joue sur le d\xE9tail : plafonds du plan d'entr\xE9e, clause de r\xE9versibilit\xE9, et d\xE9lai de r\xE9ponse en juillet-ao\xFBt.")), /*#__PURE__*/React.createElement(Chart, {
    title: "Courbe d'adoption",
    caption: "Pipedrive \xB7 21 jours, plateau d\xE8s J+3",
    values: [8, 14, 38, 66, 80, 85, 87, 89, 90],
    highlight: 3
  }), /*#__PURE__*/React.createElement(ColumnRow, {
    layout: "aside-body",
    align: "start",
    gap: 32
  }, /*#__PURE__*/React.createElement(GlassPanel, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--blue-ink)',
      fontWeight: 600,
      marginBottom: 6
    }
  }, "En bref"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--ink-80)',
      margin: 0
    }
  }, "Pour une TPE qui vend : Pipedrive. Pour qui facture aussi : Axonaut.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'var(--ink-80)',
      margin: '0 0 14px'
    }
  }, "Sur Pipedrive, l'import des 3 000 contacts a pris 4 min 12 s et signal\xE9 2 doublons. Sur Salesforce, la m\xEAme op\xE9ration a demand\xE9 une configuration pr\xE9alable de 40 minutes : disqualifiant pour une TPE sans administrateur."), /*#__PURE__*/React.createElement(Callout, {
    tone: "attention",
    label: "Avertissement"
  }, "Le plan gratuit de certains outils ", /*#__PURE__*/React.createElement("b", null, "plafonne l'export \xE0 1 000 lignes"), ". Au-del\xE0, vous \xEAtes captif : v\xE9rifiez la clause de r\xE9versibilit\xE9 avant de vous engager."))), /*#__PURE__*/React.createElement(PullQuote, {
    author: "Julien Lefevre",
    role: "Auteur \xB7 test\xE9 sur compte r\xE9el",
    initials: "JL"
  }, "Un CRM ne se choisit pas sur sa liste de fonctions, mais sur la friction qu'il vous enl\xE8ve chaque matin."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('fiche'),
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "Lire la fiche Pipedrive"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav('comparatif')
  }, "Voir le comparatif complet"))));
}
Object.assign(window, {
  ArticleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ArticleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/AuteurScreen.jsx
try { (() => {
// Page auteur — Julien Lefevre : signataire unique, méthode, derniers verdicts.
function AuteurScreen({
  onNav
}) {
  const {
    GlassPanel,
    DataTable,
    Callout,
    ColumnRow,
    FeatureColumns,
    Badge,
    Button,
    PullQuote
  } = window.CrmLogicielFrDesignSystem_d9d94b;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '36px 0 24px'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: ['Le média', 'Julien Lefevre']
  })), /*#__PURE__*/React.createElement(GlassPanel, {
    strong: true,
    radius: "2xl",
    padding: "xl"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 92,
      height: 92,
      borderRadius: 26,
      background: 'var(--grad-brand)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 34,
      flex: 'none',
      transform: 'rotate(-4deg)',
      boxShadow: 'var(--shadow-disc)'
    }
  }, "JL"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 280px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--blue-ink)'
    }
  }, "Auteur unique \xB7 signataire"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 'clamp(30px,5vw,46px)',
      letterSpacing: '-0.03em',
      color: 'var(--ink)',
      margin: '6px 0 10px'
    }
  }, "Julien Lefevre"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 17,
      color: 'var(--ink-80)',
      maxWidth: '52ch',
      margin: 0,
      lineHeight: 1.5
    }
  }, "Je teste chaque CRM sur des comptes r\xE9els et je signe chaque verdict. Pas de contenu d'\xE9diteur, pas de note achet\xE9e : si je n'ai pas mesur\xE9, je ne publie pas."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    mono: true,
    variant: "soft"
  }, "37 outils test\xE9s"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    mono: true,
    variant: "soft"
  }, "depuis 2021"), /*#__PURE__*/React.createElement(Badge, {
    tone: "teal",
    variant: "gradient"
  }, "Ind\xE9pendant"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 28,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.02em',
      color: 'var(--ink)',
      margin: 0
    }
  }, "Ma m\xE9thode"), /*#__PURE__*/React.createElement(FeatureColumns, {
    columns: 3,
    collapseAt: 820,
    items: [{
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "search",
        style: {
          width: 24,
          height: 24,
          color: '#fff'
        }
      }),
      eyebrow: '01',
      title: 'Compte réel',
      text: "J'ouvre un compte payant ou gratuit, jamais une démo guidée.",
      action: {
        label: 'La méthode',
        onClick: e => {
          e.preventDefault();
          onNav('comparatif');
        }
      }
    }, {
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "calendar-check",
        style: {
          width: 24,
          height: 24,
          color: '#fff'
        }
      }),
      eyebrow: '02',
      title: 'Chiffres datés',
      text: 'Import de 3 000 contacts, même fichier ; chaque prix et note est horodaté.',
      action: {
        label: 'Voir un comparatif',
        onClick: e => {
          e.preventDefault();
          onNav('comparatif');
        }
      }
    }, {
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "pen-line",
        style: {
          width: 24,
          height: 24,
          color: '#fff'
        }
      }),
      eyebrow: '03',
      title: 'Verdict signé',
      text: 'Captures annotées, changelog visible, un auteur unique responsable.',
      action: {
        label: 'Lire une fiche',
        onClick: e => {
          e.preventDefault();
          onNav('fiche');
        }
      }
    }]
  }), /*#__PURE__*/React.createElement(Callout, {
    tone: "retenir",
    label: "Ind\xE9pendance"
  }, "crm-logiciel.fr ne re\xE7oit ", /*#__PURE__*/React.createElement("b", null, "aucune r\xE9mun\xE9ration"), " des \xE9diteurs test\xE9s. Aucun lien d'affiliation n'influence une note."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.02em',
      color: 'var(--ink)',
      margin: '0 0 16px'
    }
  }, "Derniers verdicts sign\xE9s"), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'date',
      label: 'Date',
      num: true,
      sticky: true
    }, {
      key: 'outil',
      label: 'Outil'
    }, {
      key: 'note',
      label: 'Note',
      num: true
    }, {
      key: 'verdict',
      label: 'Verdict'
    }],
    rows: [{
      _best: true,
      date: '12.06.2026',
      outil: 'Pipedrive',
      note: {
        value: '8,4',
        tone: 'positive'
      },
      verdict: 'Recommandé'
    }, {
      date: '04.06.2026',
      outil: 'Axonaut',
      note: {
        value: '7,8',
        tone: 'positive'
      },
      verdict: 'Recommandé'
    }, {
      date: '28.05.2026',
      outil: 'Salesforce',
      note: {
        value: '4,6',
        tone: 'negative'
      },
      verdict: 'Trop lourd (TPE)'
    }]
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('comparatif'),
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 16,
        height: 16
      }
    }),
    style: {
      justifySelf: 'start'
    }
  }, "Voir tous les comparatifs")));
}
Object.assign(window, {
  AuteurScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/AuteurScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Chrome.jsx
try { (() => {
// Chrome partagé du blog crm-logiciel.fr : wordmark, nav en verre, pied de page.
function Wordmark({
  size = 24,
  inverse = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: size,
      letterSpacing: '-0.02em',
      color: inverse ? '#fff' : 'var(--ink)',
      display: 'inline-flex',
      alignItems: 'baseline',
      lineHeight: 1
    }
  }, "Crm-Logiciel", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.6,
      padding: '3px 8px',
      marginLeft: 3,
      borderRadius: 12,
      transform: 'translateY(-1px)',
      color: '#fff',
      background: inverse ? 'rgba(255,255,255,.25)' : 'var(--grad-brand)'
    }
  }, ".fr"));
}
const NAV = [{
  id: 'article',
  label: 'Guides'
}, {
  id: 'fiche',
  label: 'Avis'
}, {
  id: 'comparatif',
  label: 'Comparatifs'
}, {
  id: 'auteur',
  label: "L'auteur"
}];
function SiteHeader({
  current,
  onNav
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,.72)',
      backdropFilter: 'blur(18px) saturate(150%)',
      WebkitBackdropFilter: 'blur(18px) saturate(150%)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-wide)',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      height: 62
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('article');
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 21
  })), /*#__PURE__*/React.createElement("nav", {
    className: "dk-nav",
    style: {
      display: 'none',
      gap: 4,
      marginLeft: 8
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => onNav(n.id),
    style: {
      border: 'none',
      background: current === n.id ? 'var(--blue-tint)' : 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      fontWeight: current === n.id ? 700 : 500,
      color: current === n.id ? 'var(--blue-ink)' : 'var(--ink-80)',
      padding: '8px 14px',
      borderRadius: 999
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dk-meta",
    style: {
      display: 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-55)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "37"), " outils test\xE9s"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    className: "mb-burger",
    style: {
      border: '1px solid var(--hairline-strong)',
      background: '#fff',
      width: 42,
      height: 42,
      borderRadius: 14,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--ink)'
    },
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": open ? 'x' : 'menu',
    style: {
      width: 18,
      height: 18
    }
  })))), open && /*#__PURE__*/React.createElement("nav", {
    style: {
      borderTop: '1px solid var(--hairline)',
      background: '#fff',
      padding: '6px 12px'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => {
      onNav(n.id);
      setOpen(false);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      minHeight: 46,
      fontFamily: 'var(--font-ui)',
      fontSize: 16,
      fontWeight: current === n.id ? 700 : 500,
      color: current === n.id ? 'var(--blue-ink)' : 'var(--ink)',
      borderBottom: '1px solid var(--hairline)',
      padding: '0 8px'
    }
  }, n.label))));
}
function Breadcrumb({
  items = []
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      letterSpacing: '0.06em',
      color: 'var(--ink-55)',
      textTransform: 'uppercase',
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-35)',
      marginRight: 8
    }
  }, "/"), it)));
}
function SiteFooter() {
  const Col = ({
    title,
    items
  }) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.6)',
      margin: '0 0 12px'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 9
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      color: 'rgba(255,255,255,.88)',
      textDecoration: 'none'
    }
  }, it)))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: '#fff',
      marginTop: 72,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(40rem 30rem at 100% 0%, rgba(100,87,249,.35), transparent 60%), radial-gradient(36rem 28rem at 0% 100%, rgba(0,194,184,.28), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--content-wide)',
      margin: '0 auto',
      padding: '44px 20px',
      display: 'grid',
      gap: 28,
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    size: 20,
    inverse: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.78)',
      marginTop: 12,
      maxWidth: '32ch'
    }
  }, "Le premier blog ind\xE9pendant des logiciels CRM. On mesure, on date, on signe.")), /*#__PURE__*/React.createElement(Col, {
    title: "M\xE9thode",
    items: ['Comment on teste', 'Indépendance', 'Sources & dates']
  }), /*#__PURE__*/React.createElement(Col, {
    title: "Contenus",
    items: ['Guides de décision', 'Fiches avis', 'Comparatifs']
  }), /*#__PURE__*/React.createElement(Col, {
    title: "Le m\xE9dia",
    items: ['Julien Lefevre', 'Contact', 'Mentions légales']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderTop: '1px solid rgba(255,255,255,.14)',
      padding: '14px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-wide)',
      margin: '0 auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'rgba(255,255,255,.55)',
      letterSpacing: '0.06em'
    }
  }, "\xA9 2026 crm-logiciel.fr \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "37"), " outils test\xE9s \xB7 Mis \xE0 jour le ", /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "12 juin 2026"))));
}
Object.assign(window, {
  Wordmark,
  SiteHeader,
  SiteFooter,
  Breadcrumb,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ComparatifScreen.jsx
try { (() => {
// Comparatif : grand tableau filtrable par profil + grille de fiches outils.
function ComparatifScreen({
  onNav
}) {
  const {
    DataTable,
    ProductCard,
    ColumnRow,
    Badge,
    Button
  } = window.CrmLogicielFrDesignSystem_d9d94b;
  const [filter, setFilter] = React.useState('all');
  const ROWS = [{
    profil: 'vente',
    nom: 'Pipedrive',
    prix: '14,90 €',
    note: 8.4,
    contacts: '∞',
    verdict: {
      value: 'Recommandé',
      tone: 'positive'
    },
    _best: true
  }, {
    profil: 'tpe',
    nom: 'Axonaut',
    prix: '41,99 €',
    note: 7.8,
    contacts: '∞',
    verdict: {
      value: 'Recommandé',
      tone: 'positive'
    }
  }, {
    profil: 'vente',
    nom: 'HubSpot',
    prix: '0,00 €',
    note: 7.1,
    contacts: '1 M',
    verdict: 'Sous conditions'
  }, {
    profil: 'tpe',
    nom: 'Sellsy',
    prix: '29,00 €',
    note: 7.4,
    contacts: '∞',
    verdict: 'Sous conditions'
  }, {
    profil: 'equipe',
    nom: 'Zoho CRM',
    prix: '14,00 €',
    note: 6.7,
    contacts: '∞',
    verdict: 'Sous conditions'
  }, {
    profil: 'equipe',
    nom: 'Salesforce',
    prix: '25,00 €',
    note: 4.6,
    contacts: '∞',
    verdict: {
      value: 'Trop lourd (TPE)',
      tone: 'negative'
    }
  }];
  const FILTERS = [{
    id: 'all',
    label: 'Tous'
  }, {
    id: 'vente',
    label: 'Forces de vente'
  }, {
    id: 'tpe',
    label: 'TPE / indés'
  }, {
    id: 'equipe',
    label: 'Équipes'
  }];
  const rows = filter === 'all' ? ROWS : ROWS.filter(r => r.profil === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-wide)',
      margin: '0 auto',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      padding: '36px 0 20px'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: ['Comparatifs', 'CRM commerciaux']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 16,
      flexWrap: 'wrap',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 'clamp(30px,5vw,46px)',
      letterSpacing: '-0.03em',
      color: 'var(--ink)',
      margin: 0
    }
  }, "Comparatif : ", /*#__PURE__*/React.createElement("span", {
    className: "text-gradient"
  }, "7 CRM commerciaux")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      color: 'var(--ink-80)',
      marginTop: 10,
      maxWidth: '48ch'
    }
  }, "M\xEAmes tests, m\xEAmes comptes, m\xEAmes chiffres : choisissez par profil.")), /*#__PURE__*/React.createElement(Badge, {
    tone: "blue",
    mono: true,
    variant: "outline",
    style: {
      marginBottom: 6
    }
  }, "v2026-06"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      padding: '6px 0 22px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-55)',
      marginRight: 4
    }
  }, "Profil :"), FILTERS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.id,
    onClick: () => setFilter(f.id),
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: 999,
      minHeight: 38,
      border: filter === f.id ? 'none' : '1px solid var(--hairline-strong)',
      background: filter === f.id ? 'var(--grad-brand)' : '#fff',
      color: filter === f.id ? '#fff' : 'var(--ink-80)'
    }
  }, f.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ink-55)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, rows.length), " outils")), /*#__PURE__*/React.createElement(DataTable, {
    caption: "Comparatif CRM commerciaux \xB7 relev\xE9 le 12/06/2026",
    columns: [{
      key: 'nom',
      label: 'Outil',
      sticky: true
    }, {
      key: 'prix',
      label: 'Prix /mois',
      num: true
    }, {
      key: 'contacts',
      label: 'Contacts',
      num: true
    }, {
      key: 'note',
      label: 'Note /10',
      num: true
    }, {
      key: 'verdict',
      label: 'Verdict'
    }],
    rows: rows.map(r => ({
      _best: r._best,
      nom: r.nom,
      prix: r.prix,
      contacts: r.contacts,
      note: {
        value: r.note.toFixed(1).replace('.', ','),
        tone: r.note >= 7 ? 'positive' : r.note < 5 ? 'negative' : 'strong'
      },
      verdict: r.verdict
    }))
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.02em',
      color: 'var(--ink)',
      margin: '40px 0 20px'
    }
  }, "Notre podium"), /*#__PURE__*/React.createElement(ColumnRow, {
    layout: "three",
    align: "start",
    gap: 24,
    collapseAt: 820
  }, /*#__PURE__*/React.createElement(ProductCard, {
    name: "Pipedrive",
    category: "Forces de vente",
    score: 8.4,
    verdict: "positive",
    href: "#",
    specs: [{
      label: 'Prix',
      value: '14,90 €'
    }, {
      label: 'Essai',
      value: '14 j'
    }]
  }), /*#__PURE__*/React.createElement(ProductCard, {
    name: "Axonaut",
    category: "TPE qui facture",
    score: 7.8,
    verdict: "positive",
    href: "#",
    specs: [{
      label: 'Prix',
      value: '41,99 €'
    }, {
      label: 'Essai',
      value: '15 j'
    }]
  }), /*#__PURE__*/React.createElement(ProductCard, {
    name: "HubSpot",
    category: "D\xE9marrage gratuit",
    score: 7.1,
    verdict: "neutral",
    href: "#",
    specs: [{
      label: 'Prix',
      value: '0,00 €'
    }, {
      label: 'Plafond',
      value: '1 M'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('fiche')
  }, "Ouvrir une fiche"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav('auteur')
  }, "Notre m\xE9thode")));
}
Object.assign(window, {
  ComparatifScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ComparatifScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/FicheAvisScreen.jsx
try { (() => {
// Fiche avis avec verdict : hero verre + disques de chiffres, faders, pour/contre
// en colonnage, tableau des tarifs.
function FicheAvisScreen({
  onNav
}) {
  const {
    GlassPanel,
    StatDiscs,
    Faders,
    DataTable,
    Callout,
    ColumnRow,
    ProsCons,
    Badge,
    Button
  } = window.CrmLogicielFrDesignSystem_d9d94b;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 0 22px'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: ['Avis', 'CRM commercial', 'Pipedrive']
  })), /*#__PURE__*/React.createElement(GlassPanel, {
    strong: true,
    radius: "2xl",
    padding: "xl"
  }, /*#__PURE__*/React.createElement(ColumnRow, {
    layout: "body-aside",
    align: "center",
    gap: 30
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--blue-ink)'
    }
  }, "Fiche avis \xB7 CRM commercial"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 'clamp(30px,5vw,44px)',
      letterSpacing: '-0.03em',
      color: 'var(--ink)',
      margin: '8px 0 12px'
    }
  }, "Pipedrive"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "positive",
    variant: "gradient"
  }, "Recommand\xE9"), /*#__PURE__*/React.createElement(Badge, {
    tone: "blue",
    mono: true,
    variant: "outline"
  }, "v2026-06")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--ink-80)',
      margin: 0,
      maxWidth: '46ch'
    }
  }, "Le meilleur outil de notre panel pour une force de vente qui veut un pipeline lisible sans administrateur d\xE9di\xE9.")), /*#__PURE__*/React.createElement(StatDiscs, {
    items: [{
      value: '8,4',
      unit: '/10',
      label: 'global'
    }, {
      value: '14,90',
      unit: '€',
      label: '/ mois'
    }, {
      value: '14',
      unit: 'j',
      label: 'essai'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 28,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(ProsCons, {
    prosTitle: "Ce qu'on a aim\xE9",
    consTitle: "Ce qui coince",
    pros: ['Import de 3 000 contacts en 4 min 12 s', 'Pipeline clair, pris en main en une demi-journée', "Tarif d'entrée honnête, sans surcoût caché"],
    cons: ['Reporting avancé réservé aux plans hauts', 'Support FR plus lent en juillet-août']
  }), /*#__PURE__*/React.createElement(ColumnRow, {
    layout: "aside-body",
    align: "start",
    gap: 28
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-0.02em',
      color: 'var(--ink)',
      margin: '0 0 4px'
    }
  }, "Notes d\xE9taill\xE9es"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-55)',
      margin: 0
    }
  }, "5 crit\xE8res mesur\xE9s")), /*#__PURE__*/React.createElement(GlassPanel, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(Faders, {
    items: [{
      label: 'Prise en main',
      value: 8.8
    }, {
      label: 'Qualité-prix',
      value: 8.4
    }, {
      label: 'Support FR',
      value: 7.2
    }, {
      label: 'Import / export',
      value: 9.0
    }, {
      label: 'Reporting',
      value: 7.6
    }]
  }))), /*#__PURE__*/React.createElement(Callout, {
    tone: "retenir"
  }, "Pipedrive entre dans le budget d'une TPE et couvre la priorit\xE9 \xAB pipeline de vente \xBB. Si la facturation compte autant que la vente, regardez Axonaut."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-0.02em',
      color: 'var(--ink)',
      margin: '0 0 16px'
    }
  }, "Tarifs relev\xE9s"), /*#__PURE__*/React.createElement(DataTable, {
    caption: "Grille publique \xB7 relev\xE9e le 12/06/2026",
    columns: [{
      key: 'plan',
      label: 'Plan',
      sticky: true
    }, {
      key: 'prix',
      label: 'Prix /mois',
      num: true
    }, {
      key: 'an',
      label: '/ an (×12)',
      num: true
    }, {
      key: 'pour',
      label: 'Pour qui'
    }],
    rows: [{
      plan: 'Essential',
      prix: '14,90 €',
      an: '178,80 €',
      pour: 'Démarrage solo'
    }, {
      _best: true,
      plan: 'Advanced',
      prix: '27,90 €',
      an: '334,80 €',
      pour: {
        value: 'Le bon choix TPE',
        tone: 'positive'
      }
    }, {
      plan: 'Professional',
      prix: '49,90 €',
      an: '598,80 €',
      pour: 'Équipe structurée'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('comparatif'),
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "Comparer aux 6 autres"), /*#__PURE__*/React.createElement(Button, {
    variant: "minium-outline",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "flag",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "Signaler une erreur de tarif"))));
}
Object.assign(window, {
  FicheAvisScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/FicheAvisScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Chart = __ds_scope.Chart;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Faders = __ds_scope.Faders;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.StatDiscs = __ds_scope.StatDiscs;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.ProsCons = __ds_scope.ProsCons;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.ColumnRow = __ds_scope.ColumnRow;

__ds_ns.Visual = __ds_scope.Visual;

__ds_ns.FeatureColumns = __ds_scope.FeatureColumns;

__ds_ns.GlassPanel = __ds_scope.GlassPanel;

})();
